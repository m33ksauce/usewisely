var fs = require('fs');

var parseCSV = function(csv) {
    var data = new Array();
    var arr = csv.split('\n');
    for(var i = 0; i < arr.length; i++) {
        var fields = arr[i].split(',');
        data[i] = {
            'age': parseInt(fields[0]),
            'male': parseFloat(fields[1]),
            'female': parseFloat(fields[2])
        }
    }
    
    return {
        'getLEAvg': function(age = 0) {
            var i = 0;
            for (i = 0; data[i].age != age; i++);
            return (data[i].male + data[i].female)/2;
        }
    }
};

var actuarial = function() {
    var le_file = './le.csv';
    var le_data;
    var ready = false;

    fs.readFile(le_file, 'utf8', function(err, data) {
        if (err) throw err;
        le_data = parseCSV(data);
        ready = true;
    });

    var getLifeExpectancy = function(dob = new Date()) {
        var now = new Date();
        var age = Math.floor((new Date() - dob)/(1000*60*60*24*365));
        return now.setFullYear(now.getFullYear() + Math.floor(le_data.getLEAvg(age)));
    }
    
    return {
        getLifeExpectancy
    };
}

module.exports = actuarial;