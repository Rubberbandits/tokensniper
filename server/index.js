// we advanced now boyz
require('dotenv').config()

// disable SSL
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

/*
	Parse arguments
*/
const myArgs = process.argv.slice(2);
const contractAddress = myArgs.length > 0 ? myArgs[0] : "";

/*
	Includes
*/

const console = require("console");
const web3 = require("web3");
const ipfs = require("ipfs");
//const {Worker} = require('worker_threads');

/*
	Notifications
*/

const notify = require("./notification.js");

/*
	Utility Functions
*/

const utils = require("./util.js");

/*
	Networking Functions
*/

const network = require("./network.js");

/*
	Contract Functions
*/

const contract = require("./contract.js");

/*
	Token Functions
*/

const token = require("./token.js");

let killWatcher = false;
let lastBaseURI = "";
let lastTokenData = "";

function MonitorMetadata(_address)
{
	if (killWatcher) {
		killWatcher = false;
		return;
	}

	let _payload = Buffer.alloc(32);
	_payload.writeInt8(1, 31); // fuck it

	contract.CallContractFunction(_address, "tokenURI(uint256)", _payload.toString("hex"))
		.then((_data) => {
			let _trimmed = web3.utils.toUtf8(_data.result).replace(/\0/g, '')
			let _tokenURI = _trimmed.slice(2);

			if (lastBaseURI.length > 0 && _tokenURI != lastBaseURI) {
				notify.Send("Token Base URI has changed!");

				GetAllTokens(contractAddress)
					.then(_tokens => {
						console.log(_tokens.length);
					}, _err => {
						console.log(_err);
					});

				return;
			};

			lastBaseURI = _tokenURI;
			
			utils.API_REQUEST(_tokenURI)
				.then(_tokenData => {
					let _json = JSON.stringify(_tokenData);

					if (lastTokenData.length > 0 && _json != lastTokenData) {
						notify.Send("Token data has changed!");

						GetAllTokens(contractAddress)
							.then(_tokens => {
								console.log(_tokens.length);
							}, _err => {
								console.log(_err);
							});

						return;
					}

					lastTokenData = _json;

					MonitorMetadata(_address);
				})
		});
}

/*
	Entrypoint
*/

/*
async function Main()
{
	console.log("Starting TokenSniper...");

	if (contractAddress.length == 0) {
		console.log("ERROR: Invalid contract address specified!")
		return;
	}
	*/
	
	/*
		Bootstrap
	*/

	/*
	let _promises = [];

	await Promise.allSettled(_promises)
		.then(() => {})
		.catch(_err => {
			console.log(`BOOTSTRAP ERROR CAUGHT: ${_err}`)
		})
		.finally(() => {
			console.log("Loaded TokenSniper!");

			//MonitorMetadata(contractAddress);
		});
};

Main();
*/

(async function updateProgress() {
    setTimeout(updateProgress, 1000);
})();

process.on("SIGINT", () => {
	process.exit();
})

let _tokenIDs = [];
for (let i = 0; i < 100; i++) {
	_tokenIDs.push(i);
}

token.GetTokens(contractAddress, _tokenIDs)
	.then(_tokens => {
		console.log(_tokens);
		process.exit();
	});