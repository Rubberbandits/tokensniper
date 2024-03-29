const utils = require("./util.js");
const web3 = require("web3");

function CallContractFunction(_address, _function, _arguments)
{
	let _promise = new Promise((resolve, reject) => {
		utils.WEB3_SHA3(_function)
			.then((_data) => {
				let _byteSig = Buffer.from(_data.result.slice(2), "hex");
				let _payload = "0x" + _byteSig.toString("hex");

				if (typeof _arguments != "undefined") {
					_byteSig = _byteSig.slice(0, 4);
					_payload = "0x" + _byteSig.toString("hex") + _arguments.toString("hex");
				}

				let _requestData = {
					id: 1,
					jsonrpc: "2.0",
					method: "eth_call",
					params: [
						{
							to: _address,
							data: _payload,
						},
						"latest"
					]
				};

				utils.INFURA_REQUEST(_requestData)
					.then((_data) => {
						resolve(_data);
					});
			});
	});

	return _promise;
}

// NOTE: [rusty]
// Cache _contractData

var CONTRACTS = {};

function GetContractInformation(_address, _forceUpdate)
{
	let _promise = new Promise((resolve, reject) => {
		if (CONTRACTS[_address] && !_forceUpdate) {
			resolve(CONTRACTS[_address]);
			return;
		};

		let _contractData = {};

		CallContractFunction(_address, "totalSupply()", "")
			.then((_data) => {
				_contractData.totalSupply = web3.utils.hexToNumber(_data.result);

				let _payload = Buffer.alloc(32);
				_payload.writeInt8(1, 31); // fuck it

				CallContractFunction(_address, "tokenURI(uint256)", _payload.toString("hex"))
					.then((_data) => {
						let _trimmed = web3.utils.toUtf8(_data.result).replace(/\0/g, '')
						_contractData.baseURI = _trimmed.slice(2, _trimmed.length - 1);
						
						CONTRACTS[_address] = _contractData;

						resolve(_contractData);
					});
			});
	});

	return _promise;
}

exports.CallContractFunction = CallContractFunction;
exports.GetContractInformation = GetContractInformation;