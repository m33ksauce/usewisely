var config = require('./config.js')();
var express = require('express');

var app = express();
var port = config.port;

app.set('view engine', 'jade')

app.get('/', function (req, res) {
    res.render('index', {
        'header': 'hello!'
    });
});

app.get('/:month/:day/:year', function (req, res) {
    var months = {
        'january': 31,
        'february': 29,
        'march': 31,
        'april': 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    };
    
    var uMonth = req.params['month'].toLowerCase();
    var uDay = req.params['day'];
    var uYear = req.params['year'];

    var timeLeft = new Date(2020, 10, 5);
        
    res.render('date', {
        'title': 'Use Wisely',
        'timeLeft': timeLeft.getTime(),
        'le': config.leFile
    });
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});
