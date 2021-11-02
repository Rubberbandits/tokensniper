const axios = require('axios');

const API_BASE_URL = "http://localhost:5000"

exports.post = function(path, data)
{
	let url = new URL(path, API_BASE_URL);

	return new Promise((resolve, reject) => {
		axios.post(url.href, data)
			.catch(err => {reject(err)})
			.then(response => {resolve(response.data)});
	});
}