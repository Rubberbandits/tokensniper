const history = require('../controllers/history.controller');

module.exports = function(app) {
    app.route('/data/history/event')
        .get(history.getEvents);

	app.route('/data/history/price')
        .get(history.getPrices);
}