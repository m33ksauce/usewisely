var config = require('./config.js')();
var express = require('express');

var app = express();
var port = config.port;

app.get('/', function (req, res) {
    res.send('here\'s my app');
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});