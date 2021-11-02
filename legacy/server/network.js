const axios = require("axios");

function API_REQUEST(_tokenURI) {
	if (typeof _tokenURI == "string") {
		_tokenURI = new URL(_tokenURI);
	}

	let _promise = new Promise((resolve, reject) => {
		axios.get(_tokenURI.href, {
			proxy: {
				protocol: "https",
				host: "37.48.118.4",
				port: 13081
			}
		})
		.catch(_err => {
			console.log(_err);
			reject(_err);
		})
		.then(_res => {
			if (_res.status != 200) {
				reject("HTTP status not 200");
				return;
			};

			resolve(_res.data);
		});
	});

	return _promise;
}

exports.API_REQUEST = API_REQUEST;