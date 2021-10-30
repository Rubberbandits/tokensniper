const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	scrape.gqlRun("PriceHistoryQuery", {collectionID: "lady-killaz", cutoffDate: (new Date(Date.now() - (1000 * 60 * 60 * 24 * 7))).toJSON()}, (data) => {
		res.status(200).send(data);
	});

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}