const console = require("console");
const http = require("http");
const https = require("https");

var PROXY_AGENTS = {};
var PROXIES = [
	{
		host: "154.16.39.77",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	/*
	{	// dead?
		host: "181.215.191.255",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	*/
	{
		host: "102.129.240.162",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "191.101.148.55",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "64.137.65.115",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "134.202.123.153",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "50.114.85.48",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "94.124.160.32",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "185.33.85.232",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "79.141.161.119",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "181.214.223.134",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "191.96.58.204",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "185.170.56.67",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "154.127.48.24",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
	{
		host: "64.188.7.161",
		port: 45785,
		user: "Seldorku1337",
		password: "F2b5HkZ",
	},
];

let PROXY_PROCESSING = {};

function GET_PROXY_AGENT(_proxyID, _url)
{
	if (typeof _url == "string") {
		_url = new URL(_url);
	}

	let _promise = new Promise((resolve, reject) => {
		let _proxyInfo = PROXIES[_proxyID];
		if (!_proxyInfo) {
			reject("Invalid proxyID");
			return;
		}

		let _proxyAgent = PROXY_AGENTS[_proxyID];
		let _agentProcessing = PROXY_PROCESSING[_proxyID];

		if (!_proxyAgent && !_agentProcessing) {
			PROXY_PROCESSING[_proxyID] = true;

			http.request({
				host: _proxyInfo.host, // IP address of proxy server
				port: _proxyInfo.port, // port of proxy server
				method: 'CONNECT',
				path: _url.hostname + ":" + (_url.protocol == "https:" ? 443 : 80),
				headers: {
					'Proxy-Authorization': 'Basic ' + Buffer.from(_proxyInfo.user + ':' + _proxyInfo.password).toString('base64')
				},
			}).on('connect', (res, socket) => {
				if (res.statusCode === 200) { // connected to proxy server
					const agent = new https.Agent({ socket });

					PROXY_AGENTS[_proxyID] = agent;
					PROXY_PROCESSING[_proxyID] = false;
					resolve(agent);
				} else {
					reject("Connection failed to proxy, Status Code: " + res.statusCode);
				}
			})
			.on('error', _err => {
				reject("Connection failed to proxy: " + _err);
			})
			.end();
		} else if (!_agentProcessing) {
			resolve(_proxyAgent);
		}
	});

	return _promise;
}

async function API_REQUEST(_tokenURI, _agentID) {
	if (typeof _tokenURI == "string") {
		_tokenURI = new URL(_tokenURI);
	}

	let _promise = new Promise((resolve, reject) => {
		GET_PROXY_AGENT(_agentID, _tokenURI)
			.then(_agent => {
				https.get(
					{
						host: _tokenURI.hostname,
						path: _tokenURI.pathname,
						//agent: _agent,      // cannot use a default agent
					}, (res) => {
						let chunks = []
						res.on('data', chunk => chunks.push(chunk))
						res.on('end', () => {
							resolve(Buffer.concat(chunks).toString('utf8'));
						})
					}
				).on('error', _err => {
					reject(_err);
				})
				.end();
			})
			.catch(_err => {
				reject(_err);
			});
	});

	return _promise;
}

exports.API_REQUEST = API_REQUEST;