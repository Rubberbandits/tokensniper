const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	try {
		scrape.gqlRun("accountQuery", undefined, (data) => {
			res.status(200).send(data);
		});
	} catch {
		res.status(500).send("An error has occurred.")
	}

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}