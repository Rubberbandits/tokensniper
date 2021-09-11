const console = require("console");
const http = require("https");

function OPENSEA_REQUEST(_address, _offset, _limit, _checkData) 
{
	let _promise = new Promise((resolve, reject) => {
		let options = {
			"method": "GET",
			"hostname": "api.opensea.io",
			"port": null,
			"path": "/api/v1/assets?order_direction=asc"
					+ "&asset_contract_address=" + _address
					+ "&offset=" + _offset
					+ "&limit=" + _limit,
			"headers": {}
		};

		const req = http.request(options, function (res) {
			const chunks = [];
			
			res.on("data", function (chunk) {
				chunks.push(chunk);
			});
			
			res.on("end", function () {
				const body = Buffer.concat(chunks);
		
				let _tokens = [];
				let _data = JSON.parse(body.toString())
				_data.assets.forEach(_element => {
					if (_checkData && !_checkData(_element)) {
						return;
					}

					_tokens.push(_element);
				})

				resolve(_tokens);
			});
		});
			
		req.end();
	});

	return _promise;
}

const DATA_HANDLER = {
	"binary/octet-stream": _rawData => {
		return JSON.parse(_rawData);
	},
	"application/json": _rawData => {
		return JSON.parse(_rawData);
	},
}

http.globalAgent = new http.Agent({
	keepAlive: true,
	keepAliveMsecs: 1000,
	timeout: 30000,
	maxFreeSockets: 256,
})

function API_REQUEST(_tokenURI) 
{
	let _promise = new Promise((resolve, reject) => {
		http.get(_tokenURI, (res) => {
			const { statusCode } = res;
			const contentType = res.headers['content-type'];
			
			let error;
			// Any 2xx status code signals a successful response but
			// here we're only checking for 200.
			if (statusCode !== 200) {
				error = new Error('Request Failed.\n' +
								`Status Code: ${statusCode}`);
			} else if (!/^application\/json/.test(contentType) && !/^binary\/octet-stream/.test(contentType)) {
				error = new Error('Invalid content-type.\n' +
								`Expected application/json or binary/octet-stream but received ${contentType}`);
			}
			if (error) {
				// Consume response data to free up memory
				res.resume();

				// Reject promise
				reject(error.message);

				return;
			}
			
			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => { rawData += chunk; });
			res.on('end', () => {
				let _handler = DATA_HANDLER[contentType.split(";")[0]];
				if (!_handler) {
					reject("Error: invalid data handler! Content type: " + contentType);
					return;
				}

				let _processedData = _handler(rawData);

				resolve(_processedData);
			});
		}).on('error', (e) => {
			reject(e.message);
		});
	});

	return _promise;
}

function INFURA_REQUEST(_requestData)
{
	let _promise = new Promise((resolve, reject) => {
		let _json = JSON.stringify(_requestData);

		let _requestOptions = {
			"method": "POST",
			"hostname": process.env.INFURA_NETWORK,
			"port": null,
			"path": "/v3/" + process.env.INFURA_PROJECTID,
			"headers": {
				"Content-Type": "application/json",
				"Content-Length": _json.length
			}
		}

		const _req = http.request(_requestOptions, function (res) {
			const _chunks = [];
			
			res.on("data", function (chunk) {
				_chunks.push(chunk);
			});
			
			res.on("end", function () {
				const _body = Buffer.concat(_chunks);
		
				let _data = JSON.parse(_body.toString())
				resolve(_data);
			});
		});
			
		_req.write(_json);
		_req.end();
	});

	return _promise;
}

function WEB3_SHA3(_string)
{
	let _hexString = "0x"+Buffer.from(_string).toString('hex')
	let _promise = new Promise((resolve, reject) => {
		let _requestData = {
			jsonrpc: "2.0",
			method: "web3_sha3",
			params: [_hexString],
			id: 1
		}

		INFURA_REQUEST(_requestData)
		.then((_data) => {
			resolve(_data);
		})
	});

	return _promise;
}

exports.WEB3_SHA3 = WEB3_SHA3;
exports.INFURA_REQUEST = INFURA_REQUEST;
exports.OPENSEA_REQUEST = OPENSEA_REQUEST;
exports.API_REQUEST = API_REQUEST;