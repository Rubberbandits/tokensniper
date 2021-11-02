const collection = require('../controllers/collection.controller');

module.exports = function(app) {
    app.route('/data/collection')
        .get(collection.get);
}