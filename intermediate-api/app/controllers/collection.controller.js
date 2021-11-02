const { objectFilter } = require("../util/object_map");
const { errorHandler } = require("../util/error_response");
const data = require("../util/data_post");

const COLLECTION_MAP = {
	description: true,
	floorPrice: true,
	imageUrl: true,
	name: true,
	slug: true,
	owner: {
		address: true
	},
	stats: {
		numOwners: true,
		totalSupply: true,
		totalVolume: true
	}
}

exports.get = function(req, res)
{
	const {query: {slug}} = req;
	
	if (!slug) {
		res.status(400).send("Bad request");
		return;
	}

	data.post("/api/data", {query: "collectionQuery", variables: {collectionID: slug}})
		.catch(err => res.status(500).send(errorHandler(err)))
		.then(query => {
			let collection = objectFilter(query.data.collection, COLLECTION_MAP);
			collection.traits = query.data.assets.collection.stringTraits;

			res.status(200).send(collection);
		});
}