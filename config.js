var config = function(file = "config.json") {
    var fs = require('fs');
    var conf = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!conf.port) {
        conf.port = 3000;
    }
    if (!conf.leFile) {
        conf.leFile = 'le.csv'
    }

    return conf;
}

module.exports = config;