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
const {Worker} = require('worker_threads');

/*
	Notifications
*/

const notify = require("./notification.js");

/*
	Utility Functions
*/

const utils = require("./util.js");

/*
	Main Functions
*/

const contract = require("./contract.js");

function GetTokenInformation(_address, _tokenID)
{
	let _promise = new Promise((resolve, reject) => {

	});

	return _promise;
}

function DumpTokenInformation(_data)
{

}

function CalculateRarityDistribution(_data)
{

}

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
				notify.Send("");
				return;
			};

			lastBaseURI = _tokenURI;
			
			API_REQUEST(_tokenURI)
				.then(_tokenData => {
					let _json = JSON.stringify(_tokenData);

					if (lastTokenData.length > 0 && _json != lastTokenData) {
						notify.Send("");
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

if (contractAddress.length == 0) {
	console.log("ERROR: Invalid contract address specified!")
	return;
}

//MonitorMetadata(contractAddress);