var months = function() {
    var months = {
        'january': {
            formatted: 'January',
            maxDays: 31,
            order: 0
        },
        'february': {
            formatted: 'February',
            maxDays: 29,
            order: 1
        },
        'march': {
            formatted: 'March',
            maxDays: 31,
            order: 2
        },
        'april': {
            formatted: 'April',
            maxDays: 30,
            order: 3
        },
        'may': {
            formatted: 'May',
            maxDays: 31,
            order: 4
        },
        'june': {
            formatted: 'June',
            maxDays: 30,
            order: 5
        },
        'july':{
            formatted: 'July',
            maxDays: 31,
            order: 6
        },
        'august': {
            formatted: 'August',
            maxDays: 31,
            order: 7
        },
        'september': {
            formatted: 'September',
            maxDays: 30,
            order: 8
        },
        'october': {
            formatted: 'October',
            maxDays: 31,
            order: 9
        },
        'november': {
            formatted: 'November',
            maxDays: 30,
            order: 10
        },
        'december': {
            formatted: 'December',
            maxDays: 31,
            order: 11
        }
    };

    var getByOrder = function(x) {
        for (m in months) {
            if (m.order == x) {
                return m;
            }
        }
    };

    var getByName = function(name) {
        return months[name.toLowerCase()];
    }

    var getAll = function() {
        return months;
    }
    
    return {
        getAll,
        getByOrder,
        getByName
    };
};

module.exports = months;