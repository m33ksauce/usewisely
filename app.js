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
        'january': {
            maxDays: 31,
            order: 0
        },
        'february': {
            maxDays: 29,
            order: 1
        },
        'march': {
            maxDays: 31,
            order: 2
        },
        'april': {
            maxDays: 30,
            order: 3
        },
        'may': {
            maxDays: 31,
            order: 4
        },
        'june': {
            maxDays: 30,
            order: 5
        },
        'july':{
            maxDays: 31,
            order: 6
        },
        'august': {
            maxDays: 31,
            order: 7
        },
        'september': {
            maxDays: 30,
            order: 8
        },
        'october': {
            maxDays: 31,
            order: 9
        },
        'november': {
            maxDays: 30,
            order: 10
        },
        'december': {
            maxDays: 31,
            order: 11
        }
    };
    
    var uMonth = req.params['month'].toLowerCase();
    var uDay = req.params['day'];
    var uYear = req.params['year'];

    if (uDay > months[uMonth].maxDays | uDay <= 0) {
        res.render('error', {
            'message': 'Invalid day for this month'
        });
        return;
    }
    
    var now  = new Date();
    var timeLeft = new Date(uYear, months[uMonth].order, uDay);
    if (now < timeLeft) {
        res.render('error', {
            'message': 'DOB has not happened yet!'
        });
        return;
    } 
        
    res.render('date', {
        'title': 'Use Wisely',
        'timeLeft': timeLeft.getTime(),
        'le': config.leFile
    });
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});
