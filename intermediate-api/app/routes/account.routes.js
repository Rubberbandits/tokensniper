const account = require('../controllers/account.controller');

module.exports = function(app) {
    app.route('/data/account')
        .get(account.get);
}