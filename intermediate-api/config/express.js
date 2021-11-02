const express = require('express');
const bodyParser = require('body-parser');

/**
 * catches bodyParser exceptions and replies with a 400
 */
function handleBadJson(error, req, res, next) {
    if (error instanceof SyntaxError)
        res.sendStatus(400);
    else
        next();
}

module.exports = function() {
    const app = express();

    // body parser support
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // auto reply 400's to bad requests
    app.use(handleBadJson);

	require("../app/routes/account.routes")(app);
	require("../app/routes/collection.routes")(app);
	require("../app/routes/history.routes")(app);

    return app;
};