var config = require('./config.js')();
var months = require('./modules/months.js')();
var actuarial = require('./modules/actuarial.js')();
var express = require('express');


var app = express();

var port = config.port;
var baseTitle = "Use Wisely!";

app.use(express.static('public'));

app.set('view engine', 'jade')

app.get('/', function (req, res) {
    res.render('index', {
        'title': baseTitle
    });
});

app.get('/:month/:day/:year', function (req, res) {
    if (!months.getByName(req.params['month'].toLowerCase())) {
        res.render('error', {
            'message': 'error getting month'
        });
    }
    var uMonth = req.params['month'].toLowerCase();
    var uDay = req.params['day'];
    var uYear = req.params['year'];

    if (uDay > months.getByName(uMonth).maxDays | uDay <= 0) {
        res.render('error', {
            'message': 'Invalid day for this month'
        });
    }

    now = new Date();    
    var dob  = new Date(uYear, months.getByName(uMonth).order, uDay);

    if (now < dob) {
        res.render('error', {
            'message': 'D.O.B. has not happened yet!'
        });
    }
    
    res.render('date', {
        'title': 'Use Wisely',
        'timeLeft': actuarial.getLifeExpectancy(dob),
        'le': config.leFile
    });
});

app.listen(port, function() {
    console.log('We\'re listening on ' + port);
});
