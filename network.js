const console = require("console");
const http = require("https");

var PROXIES = [
	{
		host: "",
		port: "",
		path: "",
		headers: {
			'Proxy-Authorization': auth
		}
	},
];

function API_REQUEST(_tokenURI) {
	http.request({
		host: '255.255.255.255', // IP address of proxy server
		port: 99999, // port of proxy server
		method: 'CONNECT',
		path: 'kinopoisk.ru:443', // some destination, add 443 port for https!
		headers: {
			'Proxy-Authorization': auth
		},
	})
	.on('connect', (res, socket) => {
		if (res.statusCode === 200) { // connected to proxy server
			const agent = new https.Agent({ socket });
			https.get(
				{
					host: 'www.kinopoisk.ru',
					path: '/',
					agent,      // cannot use a default agent
				}, (res) => {
					let chunks = []
					res.on('data', chunk => chunks.push(chunk))
					res.on('end', () => {
						console.log('DONE', Buffer.concat(chunks).toString('utf8'))
					})
				}
			)
		}
	})
	.on('error', (err) => {
		console.error('error', err)
	})
	.end();
}