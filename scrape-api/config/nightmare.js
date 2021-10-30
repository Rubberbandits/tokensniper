var Nightmare = require('nightmare');
var nightmare = Nightmare({
	images: false,
	webPreferences: {
		partition: 'persist: __cf_bm'
	}
});

/*
	Load GraphQL query maps
*/

var GRAPHQL_MAP = {};

const path = require("path");
const fs = require("fs");
var normalizedPath = path.join(__dirname, "gql");

fs.readdirSync(normalizedPath).forEach(function(file) {
	let {queryID, query, signature} = require("./gql/" + path.parse(file).name);

  	GRAPHQL_MAP[queryID] = {query: query, signature: signature};
});

exports.setup = function(cb) {
    nightmare
	.goto("https://opensea.io/collection/lady-killaz")
	.then(ob => {
		console.log("Nightmare setup complete")
        cb();
    });
};

exports.get = function() {
    return nightmare;
}; 

exports.gqlRun = function(queryID, variables, cb) {
	let {query, signature} = GRAPHQL_MAP[queryID];
	if (query === undefined) {
		cb(false);
		return;
	}

	let body = query(variables);
	
	nightmare
	.evaluate(async (body, signature) => {
		let result = {};
		await fetch("https://api.opensea.io/graphql/", {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json",
				"sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				"x-api-key": "2f6f419a083c46de9d83ce3dbe7db601",
				"x-build-id": "q_vl0PijDKozXlx5SdghX",
				"x-signed-query": signature,
				"Referer": "https://opensea.io/",
			},
			"body": body,
			"method": "POST"
		}).then(res => res.json()).then(res => {result = res})
	
		return result;
	}, body, signature)
	.then(result => {
	  	cb(result);
	})
}