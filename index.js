const express = require('express')
const path = require('path')
const opn = require('opn')
const app = express()

/* serves main page */
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

/* serves all the static files */
app.get(/^(.+)$/, (req, res) => {
    console.log('Request file ' + req.path)
    res.sendFile(__dirname + req.params[0])
})

app.listen(8082, () => {
    console.log('Web server listening on port 8082!\n')
})

opn('http://localhost:8082').then(() => {
    console.log("Opening http://localhost:8082 in browser...\n")
})
