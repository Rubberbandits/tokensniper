const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
	scrape.gqlRun("accountQuery", {address: "0x7aa4720178a05654D48182aCF853b4eC1fe5f7E5"}, (data) => {
		res.status(200).send(data);
	});

	/*
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })*/
}