const express = require('express')
const path = require('path')
const app = express()

/* serves main page */
app.get("/", function (req, res) {
	res.sendfile('index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
	console.log('static file request : ' + req.params);
	res.sendfile(__dirname + req.params[0]);
});

app.listen(8082, function () {
	console.log('Example app listening on port 8082!')
})
