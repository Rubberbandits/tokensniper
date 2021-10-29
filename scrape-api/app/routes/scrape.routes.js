const scrape = require('../controllers/scrape.controller');

module.exports = function(app) {
    app.route('/api/scrape')
        .get(scrape.test);
}