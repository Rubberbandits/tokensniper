/*
	Networking Functions
*/

const network = require("./network.js");

/*
	Contract Functions
*/

const contract = require("./contract.js");

/*
	Event Emitter
*/

const { EventEmitter } = require("stream");
const emitter = new EventEmitter;

// NOTE: [rusty]
// use GetTokenInformation to retrieve data for single token
// GetTokens is passed _address, _arrayOfTokenIDs
// Promise<GetTokenInformation> reject passed tokenID
// GetTokens catches reject, call GetTokenInformation with passed ID

function GetTokenInformation(_address, _tokenID, _totalSupply)
{
	let _promise = new Promise((resolve, reject) => {
		contract.GetContractInformation(_address)
			.then(async _contractData => {
				let _baseURI = _contractData.baseURI;
				let _url = new URL(_baseURI);

				if (_url.protocol == "ipfs:") {
					_baseURI = `https://cloudflare-ipfs.com/ipfs/${_url.hostname}/`
				}

				let _agentID = Math.ceil((_tokenID / _totalSupply) * (network.PROXIES.length))

				let _start = new Date()
				console.log(`Started request for TokenID ${_tokenID} with Proxy ${_agentID}`)
				await network.API_REQUEST(_baseURI + _tokenID, _agentID)
					.then(_result => {
						console.log(`Finished request for TokenID ${_tokenID} with Proxy ${_agentID} (${new Date() - _start}ms)`)
						resolve(_result);
					})
					.catch(_err => {
						console.log("API_REQUEST Rejection " + _err);
						reject(_tokenID);
					});
			})
	});

	return _promise;
}

function GetTokens(_address, _tokenIDs)
{
	let _promise = new Promise((resolve, reject) => {
		let _tokenData = {};

		let _RETRY = _tokenID => {
			GetTokenInformation(_address, _tokenID, _tokenIDs.length)
				.then(_result => {
					_tokenData[_tokenID] = _result;

					let _gotAllTokens = true;
					_tokenIDs.forEach(_tokenID => {
						if (!_tokenData[_tokenID]) {
							_gotAllTokens = false;
						}
					})

					if (_gotAllTokens) {
						resolve(_tokenData);
					}
				})
				.catch(_tokenID => {
					console.log("retry")
					_RETRY(_tokenID);
				});
		}

		_tokenIDs.forEach(_tokenID => {
			_RETRY(_tokenID);
		});
	});

	return _promise;
}

function WriteTokenInformation(_data)
{

}

function CalculateRarityDistribution(_data)
{

}

exports.GetTokenInformation = GetTokenInformation;
exports.GetTokens = GetTokens;
exports.events = emitter;