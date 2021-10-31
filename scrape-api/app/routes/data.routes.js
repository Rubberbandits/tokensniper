const data = require('../controllers/data.controller');

module.exports = function(app) {
    app.route('/api/data')
        .post(data.main);
}