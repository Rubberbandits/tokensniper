const scrape = require('../../config/nightmare');

exports.test = function(req, res) {
    scrape.scrapeTest(function(data) {
        res.status(200).send(data);
    })
}