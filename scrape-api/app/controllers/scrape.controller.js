const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	scrape.gqlRun("AssetSearchQuery", {collectionID: "lady-killaz"}, (data) => {
		res.status(200).send(data);
	});

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}