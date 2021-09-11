// fucking SSL
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

/*
	Parse arguments
*/
const myArgs = process.argv.slice(2);
const baseURI = myArgs.length > 0 ? myArgs[0] : "";
const tokenSupply = myArgs.length > 1 ? Number(myArgs[1]) : 1;
const rareThreshold = myArgs.length > 2 ? Number(myArgs[2]) : 10;

const HTTPS = baseURI.split(":")[0] == "https" ? true : false;

/*
	Variables
*/

var lastData = "";
var killWatcher = false;
var errorSuppression = {};

/*
	Constants
*/

const PhoneNumbers = [
	"+19163851002",
	"+17193674119",
	"+17192871590"
]

/*
	Require modules
*/
const console = require("console");
const http = HTTPS && require("https") || require("http");
var childProcess = require('child_process');
const {Webhook, MessageBuilder} = require('discord-webhook-node');

if (baseURI.length == 0) {
	console.log("ERROR: Invalid base URI specified!")
	return;
}

const hook = new Webhook("https://discord.com/api/webhooks/884532490944012349/aS_lEn3IH-TSVDisbBEO25rFvxa25A-IMwkzXbSxzQR8lN64gi5vqNEkcrOy5-zMgldk");
const embed = new MessageBuilder();
const client = require('twilio')("AC1614ffe151c18e4b41c6eed8107e8877", "0c659c8a6c1adb281232278ea1883393");

/*
	Helper Functions
*/

// pasted from stackoverflow
function runScript(scriptPath, args, callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath, args);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });
}

function sendRequestToToken(_tokenURI) {
	http.get(_tokenURI + 1, (res) => {
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
			errorSuppression[statusCode] = errorSuppression[statusCode] || {};
			errorSuppression[statusCode].count = (errorSuppression[statusCode].count || 0) + 1

			if (errorSuppression[statusCode].count > 10 && typeof errorSuppression[statusCode].startTime == "undefined") {
				errorSuppression[statusCode].startTime = Date.now()
			}

			let suppressionStart = errorSuppression[statusCode].startTime;

			if (typeof suppressionStart == "undefined") {
				hook.send("@here").then(() => {
					hook.error('**NFT API Watcher**', 'HTTPAgent Error', 'Watcher ('+baseURI+') has encountered an error! \n' + error.message);
				});
			} else if (Date.now() - suppressionStart > 600) {
				errorSuppression[statusCode].startTime = null;
				errorSuppression[statusCode].count = 0;
			}

			// Being rate limited
			if (statusCode == 429) {
				let _waitTime = res.headers["retry-after"] * 1000

				setTimeout(watch, _waitTime);
				hook.send("Bot has been rate limited for "+ _waitTime +"ms.")
				return;
			} else {
				console.error(error.message);
			}

			// Consume response data to free up memory
			res.resume();

			return;
		}
		
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', (chunk) => { rawData += chunk; });
		res.on('end', () => {
			// Change in data!
			if (lastData.length > 0 && lastData != rawData) {
				console.log("DATA CHANGED! BEGINNING DUMP!")

				PhoneNumbers.forEach((number) => {
					client.calls
					.create({
						twiml: '<Response><Say>NFT API DUMP BEGAN, CHECK DISCORD FOR DETAILS</Say></Response>',
						to: number,
						from: '+19188945357'
					}).then(killWatcher = true);
				})

				runScript("./sniper.js", [baseURI, tokenSupply, rareThreshold], () => {process.exit()})
				return;
			}

			lastData = rawData;
		});
	}).on('error', (e) => {
		console.error(`Got error: ${e.message}`);
	});
}

/*
	Entrypoint
*/

console.log("--- BEGINNING WATCH ---")
hook.info('**NFT API Watcher**', 'Collection Watch Began', 'NFT API at URI ('+baseURI+') is now being watched.');

async function watch() {
	if (killWatcher) {
		return;
	}

    sendRequestToToken(baseURI);
    setTimeout(watch, 10000);
}

watch();

process.on('SIGINT', function() {
    console.log("\nCaught interrupt signal");
	hook.send("@here").then(() => {
		hook.error('**NFT API Watcher**', 'CRITICAL', 'Watcher ('+baseURI+') has exited!').then(() => {
			process.exit();
		})
	});
});