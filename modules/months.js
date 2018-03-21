var months = function() {
    var months = [
        {
            name: 'January',
            maxDays: 31,
            order: 0
        },
        {
            name: 'February',
            maxDays: 29,
            order: 1
        },
        {
            name: 'March',
            maxDays: 31,
            order: 2
        },
        {
            name: 'April',
            maxDays: 30,
            order: 3
        },
        {
            name: 'May',
            maxDays: 31,
            order: 4
        },
        {
            name: 'June',
            maxDays: 30,
            order: 5
        },
        {
            name: 'July',
            maxDays: 31,
            order: 6
        },
        {
            name: 'August',
            maxDays: 31,
            order: 7
        },
        {
            name: 'September',
            maxDays: 30,
            order: 8
        },
        {
            name: 'October',
            maxDays: 31,
            order: 9
        },
        {
            name: 'November',
            maxDays: 30,
            order: 10
        },
        {
            name: 'December',
            maxDays: 31,
            order: 11
        }
    ];

    var getByName = function(name) {
        for (var i = 0; i < months.length; i++) {
            if (name == months[i].name.toLowerCase()) {
                return months[i];
            }
        }
    };

    return {
        months,
        getByName
    };
};

module.exports = months;