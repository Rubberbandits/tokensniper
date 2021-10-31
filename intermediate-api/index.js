const express = require('./config/express');
const mysql = require("./config/mysql");
const app = express();

app.listen(4000, () => {
	console.log("api running -> http://localhost:4000/");
});
