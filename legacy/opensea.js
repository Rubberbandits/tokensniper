const console = require("console");
const http = require("https");
const fs = require("fs");

const myArgs = process.argv.slice(2);
const filePath = myArgs.length > 0 ? myArgs[0] : "";
const contractAddr = myArgs.length > 1 ? myArgs[1] : "";

var rareTokens = [];
let lastCount = 0;
let totalTokens = 0;

fs.readFile(filePath, (err, data) => {
	if (err) throw err;

	rareTokens = JSON.parse(data);

	for (var _tokenID in rareTokens) {
		totalTokens += 1;
	}

	NextRequest();
})

function APIRequest(tokenIDs, final) {
	let options = {
		"method": "GET",
		"hostname": "api.opensea.io",
		"port": null,
		"path": "/api/v1/assets?order_direction=asc&asset_contract_address="+contractAddr,
		"headers": {}
	};

	tokenIDs.forEach(tokenID => {
		options.path += ("&token_ids="+tokenID)
	})

	const req = http.request(options, function (res) {
		const chunks = [];
		
		res.on("data", function (chunk) {
			chunks.push(chunk);
		});
		
		res.on("end", function () {
			const body = Buffer.concat(chunks);
	
			let data = JSON.parse(body.toString())
			data.assets.forEach(element => {
				if (element.sell_orders) {
					let tokenID = element.token_id;

					console.log("TOKEN ID "+tokenID+" ("+rareTokens[tokenID].total_rarity+") LISTED FOR SALE ON OPENSEA! CURRENT PRICE: "+element.sell_orders[0].current_price / 1000000000000000000)
				}
			})

			if (final) {
				process.exit();
			} else {
				NextRequest();
			}
		});
	});
		
	req.end();
}

function NextRequest() {
	let currentCount = 0;
	let tokenIDs = [];

	for (var _tokenID in rareTokens) {
		if (currentCount > lastCount && currentCount < lastCount + 20) {
			tokenIDs[tokenIDs.length] = _tokenID;
		} else if (currentCount >= lastCount + 20) {
			break
		}

		currentCount += 1;
	}

	//console.log("requesting "+ tokenIDs[0] +" to " + tokenIDs[tokenIDs.length - 1] + " ("+(tokenIDs.length - 1)+")")

	lastCount = currentCount;

	APIRequest(tokenIDs, lastCount >= totalTokens);
}