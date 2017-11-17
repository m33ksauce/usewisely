var fs = require('fs');

var parseCSV = function() {
    return;
}

var actuarial = function(dob = new Date()) {
    var le_file = './le.csv';
    var le_data;
    var ready = false;

    fs.readFileSync(le_file, 'utf8', function(err, data) {
        if (err) throw err;
        le_data = parseCSV(data);
        ready = true;
    });
    
    return {
        'getLifeExpectancy': function() {
            return
        },
        'isReady': function() {
            return ready;
        }
    };
}

module.exports = actuarial;