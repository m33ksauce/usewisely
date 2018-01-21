var months = require('./months.js');

var setDays = function(e, max) {
    var opts = "";
    for (var i = 1; i <= max; i++) {
        opts += '<option value="' + i + '">' + i + '</option>';
    }
    e.innerHTML = opts;
}

window.onload = function() {
    var daysElem = document.getElementById("day");
    document.getElementById("month").addEventListener("change", function() {
        var selected = document.getElementById("month").selectedIndex;
        setDays(daysElem, months.getByOrder(selected).maxDays); //months.getByOrder(selected).maxDays
    });
}