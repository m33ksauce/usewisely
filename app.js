var config = require('./config.js')();
var months = require('./months.js')();
var actuarial = require('./actuarial.js')();
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
    var uMonth = req.params['month'].toLowerCase();
    var uDay = req.params['day'];
    var uYear = req.params['year'];

    if (uDay > months[uMonth].maxDays | uDay <= 0) {
        res.render('error', {
            'message': 'Invalid day for this month'
        });
        return;
    }

    now = new Date();
    if (now < timeLeft) {
        res.render('error', {
            'message': 'DOB has not happened yet!'
        });
        return;
    }
    
    var DOB  = new Date(uYear, months[uMonth].order, uDay);
    var timeLeft = new Date();
        
    res.render('date', {
        'title': 'Use Wisely',
        'timeLeft': timeLeft.getTime(),
        'le': config.leFile
    });
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});
