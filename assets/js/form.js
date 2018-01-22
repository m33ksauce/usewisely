var months = require('../../modules/months.js');

var setDays = function(e, max) {
    var opts = "";
    for (var i = 1; i <= max; i++) {
        opts += '<option value="' + i + '">' + i + '</option>';
    }
    e.innerHTML = opts;
}

var populateMonths = function (elem) {
    var innerHTML = ""
    for (mo in months.getAll()) {
        innerHTML += "<option value=\"" + mo.formatted + "\">" + mo.formatted + "</option>";
    }
    elem.innerHTML += innerHTML
}

window.onload = function() {
    populateMonths(document.querySelector("#month"));
    var daysElem = document.getElementById("day");
    document.getElementById("month").addEventListener("change", function() {
        var selected = document.getElementById("month").selectedIndex;
        setDays(daysElem, months.getByOrder(selected).maxDays); //months.getByOrder(selected).maxDays
    });
}