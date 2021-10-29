const express = require('./config/express');
const nightmare = require('./config/nightmare')
const app = express();

nightmare.setup(() => {
    app.listen(5000, () => {
        console.log("api running -> http://localhost:5000/");
    });
});

