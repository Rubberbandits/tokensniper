const { objectFilter } = require("../util/object_map");
const data = require("../util/data_post");

const ACCOUNT_MAP = {
	address: true
}

const ASSET_MAP = {
	name: true,
	imageUrl: true,
	orderData: true,
	tokenId: true,
	ownedQuantity: true,
	collection: {
		imageUrl: true,
		name: true,
		slug: true,
	},
	assetContract: {
		address: true
	},
	assetEventData: {
		lastSale: {
			unitPriceQuantity: {
				asset: {
					decimals: true,
					symbol: true,
					usdSpotPrice: true,

				},
				quantity: true
			}
		}
	}
}

exports.get = function(req, res)
{
	const {query: {publicAddress}} = req;
	
	if (!publicAddress) {
		res.status(400).send("Bad request");
		return;
	}

	data.post("/api/data", {query: "accountQuery", variables: {address: publicAddress}})
		.catch(err => res.status(500).send(err))
		.then(query => {
			let account = query.data.account;
			let assets = [];

			query.data.assets.search.edges.forEach((asset, index) => {
				let assetData = asset.node.asset;

				assets.push(objectFilter(assetData, ASSET_MAP));
			});

			let payload = {
				account: objectFilter(account, ACCOUNT_MAP),
				assets: assets
			};

			res.status(200).send(payload);
		}); 
}