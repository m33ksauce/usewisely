var months = function() {
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
    var getMonthByOrder = function(x) {
        for(var m in months) {
            if m.order == x {
                return m;
            }
        }
    }

    return {}
};

module.exports = months;