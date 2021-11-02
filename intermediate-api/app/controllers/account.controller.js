const data = require("./data.controller");

const ACCOUNT_MAP = {
	address: true
}

const ASSET_MAP = {
	name: true,
	imageUrl: true,
	orderData: true,
	tokenId: true,
	ownedQuantity: true,
	collection: true,
	assetContract: true,
	assetEventData: true
}

exports.get = function(req, res)
{
	const {query: {publicAddress}} = req;
	
	data.post("/api/data", {query: "accountQuery", variables: {address: publicAddress}})
		.catch(err => res.status(500).send(err))
		.then(query => {
			let account = query.data.account;
			let assets = [];

			query.data.assets.search.edges.forEach((asset, index) => {
				let assetData = asset.node.asset;

				assets.push(Object.fromEntries(Object.entries(assetData).map(([k, v]) => [k, ASSET_MAP[k] ? v : undefined])))
			});

			let payload = {
				account: Object.fromEntries(Object.entries(account).map(([k, v]) => [k, ACCOUNT_MAP[k] ? v : undefined])),
				assets: assets
			};

			res.status(200).send(payload);
		}); 
}