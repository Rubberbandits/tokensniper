const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	scrape.gqlRun("collectionQuery", {collectionID: "nautilus-nft"}, (data) => {
		res.status(200).send(data);
	});

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}