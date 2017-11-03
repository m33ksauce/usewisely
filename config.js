var config = function(file = "config.json") {
    var fs = require('fs');
    var conf = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!conf.port) {
        conf.port = 3000;
    }

    return conf;
}

module.exports = config;