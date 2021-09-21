/*
	Networking Functions
*/

const network = require("./network.js");

/*
	Contract Functions
*/

const contract = require("./contract.js");

/*
	Functions
*/

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
				network.API_REQUEST(_baseURI + _tokenID, _agentID)
					.then(_result => {
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
	let _promise = new Promise(async (resolve, reject) => {
		let _promises = [];

		_tokenIDs.forEach(_tokenID => {
			_promises.push(GetTokenInformation(_address, _tokenID, _tokenIDs.length))
		})

		let _tokenData = [];

		await Promise.allSettled(_promises)
			.then(_res => {
				_res.forEach(_promiseData => {
					_tokenData.push(_promiseData.value)
				})
			})
			.catch(_err => {
				reject(_err);
			})
			.finally(_res => {
				resolve(_tokenData);
			})
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