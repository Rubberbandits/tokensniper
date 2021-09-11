// fucking SSL
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

/*
	npm install cli-progress
	npm install discord-webhook-node
*/

/*
	Parse arguments
*/
const myArgs = process.argv.slice(2);
const baseURI = myArgs.length > 0 ? myArgs[0] : "";
const tokenSupply = myArgs.length > 1 ? Number(myArgs[1]) : 1;
const rareThreshold = myArgs.length > 2 ? Number(myArgs[2]) : 10;

const HTTPS = baseURI.split(":")[0] == "https" ? true : false;

/*
	Require modules
*/
const console = require("console");
const http = HTTPS && require("https") || require("http");
const cliProgress = require('cli-progress');
const {Webhook, MessageBuilder} = require('discord-webhook-node');
const fs = require("fs");

const hook = new Webhook("https://discord.com/api/webhooks/884532490944012349/aS_lEn3IH-TSVDisbBEO25rFvxa25A-IMwkzXbSxzQR8lN64gi5vqNEkcrOy5-zMgldk");
const embed = new MessageBuilder();

/*
	Variables
*/

var tokensProcessed = 0;
var currentQueue = 0;
var validDataCount = 0;

var collectedData = [];
var attributeDistribution = [];

var rareTokens = {};

/*
	Functions
*/

function getTokenData(tokenID) {
	http.get(baseURI + String(tokenID), (res) => {
		const { statusCode } = res;
		const contentType = res.headers['content-type'];
		
		let error;
		// Any 2xx status code signals a successful response but
		// here we're only checking for 200.
		if (statusCode !== 200) {
			error = new Error('Request Failed.\n' +
							`Status Code: ${statusCode}`);
		} else if (!/^application\/json/.test(contentType)) {
			error = new Error('Invalid content-type.\n' +
							`Expected application/json but received ${contentType}`);
		}
		if (error) {
			// Being rate limited
			if (statusCode == 429) {
				let _wait = Number(res.headers["retry-after"] * 1000);

				sleep(_wait);
				getTokenData(tokenID);
				return;
			} else {
				console.error(error.message);
			}

			// Consume response data to free up memory
			res.resume();

			tokensProcessed += 1;
			currentQueue += 1;

			finishHTTPRequest();
			return;
		}
		
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', (chunk) => { rawData += chunk; });
		res.on('end', () => {
			try {
				const parsedData = JSON.parse(rawData);
				collectedData[tokenID] = parsedData;

				tokensProcessed += 1;
				currentQueue += 1;

				finishHTTPRequest();
			} catch (e) {
				console.error(e.message);
			}
		});
	}).on('error', (e) => {
		tokensProcessed += 1;
		currentQueue += 1;
		console.error(`Got error: ${e.message}`);

		finishHTTPRequest();
	});
}

function finishHTTPRequest() {
	bar1.update(tokensProcessed);

	if (tokensProcessed == tokenSupply) {
		endpoint();
	} else if (currentQueue > 9) {
		currentQueue = 0;

		for (let i = 1; i <= 10; i++) {
			getTokenData(tokensProcessed + i);
		}
	}
}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}   

function endpoint() {
	for (var _tokenID in collectedData) {
        let _data = collectedData[_tokenID];

		let _attributes = _data.attributes;
		if (typeof _attributes == 'undefined') {
			continue;
		}

        _attributes.forEach(_attribute => {
			let _type = _attribute.trait_type;
			let _value = _attribute.value;

			attributeDistribution[_type] = (typeof attributeDistribution[_type] != 'undefined' && attributeDistribution[_type] instanceof Array) ? attributeDistribution[_type] : [];
			attributeDistribution[_type][_value] = (attributeDistribution[_type][_value] || 0) + 1;
			validDataCount += 1;
		});
    }

	for (var _traitType in attributeDistribution) {
		let _data = attributeDistribution[_traitType];
		
		for (var _value in _data) {
			let _count = _data[_value];
			let _percentage = ((_count / validDataCount) * 100).toFixed(4) + "%";

			attributeDistribution[_traitType][_value] = _percentage;
		}
	}

	for (var _tokenID in collectedData) {
		let _data = collectedData[_tokenID];

		let _attributes = _data.attributes;
		if (typeof _attributes == 'undefined') {
			continue;
		}

		let _distributedRarity = 0;

		_attributes.forEach(_attribute => {
			let _type = _attribute.trait_type;
			let _value = _attribute.value;

			_distributedRarity += parseFloat(attributeDistribution[_type][_value].slice(0, -1));
		})

		if (_distributedRarity <= rareThreshold && typeof rareTokens[_tokenID] == 'undefined') {
			rareTokens[_tokenID] = {
				attributes: _attributes,
				total_rarity: _distributedRarity.toFixed(4) + "%"
			};
		}
	}

	bar1.stop();

	if (collectedData.length == 0) {
		process.exit();
		return;
	}

	if (rareTokens.length == 0) {
		process.exit();
		return;
	}

	console.log("SEARCHED TOKENS: " + (collectedData.length - 1));
	console.log("----- RARITY -----");
	console.log(attributeDistribution);
	console.log("WRITING TOKENS TO FILE...")

	hook.send("@here").then(() => {
		hook.info('**NFT API Watcher**', 'Watched Collection Token Dump', 'A watched collection has had a metadata update! File to follow.');

		let filePath = "raretokens_"+Date.now()+".json"

		fs.writeFile(filePath, JSON.stringify(rareTokens, null, 4), {}, (err) => {
			if (err) throw err;

			hook.sendFile(filePath)
			.then(() => {
				console.log("----- TOKENS WRITTEN TO FILE -----")
				process.exit();
			})
			.catch(err => console.log(err.message));
		});
	});
}

/*
	Entrypoint
*/

if (baseURI.length == 0) {
	console.log("ERROR: Invalid base URI specified!")
	return;
}

const bar1 = new cliProgress.SingleBar({etaBuffer: 250}, cliProgress.Presets.shades_classic);
bar1.start(tokenSupply, 0);

for (let i = 1; i <= 10; i++) {
	getTokenData(i);
}

async function updateProgress() {
    bar1.updateETA();
    setTimeout(updateProgress, 1000);
}

updateProgress();

process.on('SIGINT', function() {
    console.log("\nCaught interrupt signal");

	endpoint();
});