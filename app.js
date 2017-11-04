var config = require('./config.js')();
var express = require('express');

var app = express();
var port = config.port;
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/:year/:month/:day', function (req, res) {
    res.render('date')
    //res.send(req.params);
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});
