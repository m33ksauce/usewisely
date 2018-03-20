var months = require('../../modules/months.js')();

var changeDays()

var setDays = function(e, m) {
    var opts = "";
    for (var i = 1; i <= max; i++) {
        opts += '<option value="' + i + '">' + i + '</option>';
    }
    e.innerHTML = opts;
}

var populateMonths = function (elem) {
    var innerHTML = ""
    allMonths = months.getAll();
    for (mo in allMonths) {
        innerHTML += "<option value=\"" + allMonths[mo].formatted + "\">" + allMonths[mo].formatted + "</option>";
    }
    elem.innerHTML += innerHTML;
}

window.onload = function() {
    var monthElem = document.querySelector("#month");
    var daysElem = document.getElementById("day");
    populateMonths(monthElem);
    monthElem.addEventListener("change", function() {
        changeDays(daysElem, monthElem.selectedIndex);
    });
}