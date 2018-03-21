var months = require("../../modules/months.js")().months;

var changeDays = function() {
    return;
}

var changeDays = function(daysElem, monthElem) {
    var opts = "";
    for (var i = 1; i <= max; i++) {
        opts += '<option value="' + i + '">' + i + '</option>';
    }
    e.innerHTML = opts;
}

var populateMonths = function(elem) {
    var innerHTML = "";
    for (mo in months) {
        innerHTML += "<option value=\"" + months[mo].name + "\">" + months[mo].name + "</option>";
    }
    elem.innerHTML += innerHTML;
}

var populateDays = function(elem, monthElem) {
    var innerHTML = "";
    var mo = months[monthElem.selectedIndex];
    for (var i=1; i <= mo.maxDays; i++) {
        innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
    }
    elem.innerHTML = innerHTML;
}

var toggleLeapYear = function(monthElem, daysElem, yearElem) {
    //We need to toggle the leap year, but only when the year/month change,
    //and only when we have a leap year

    

}

var yearDivides = function(year, modNumber) {
    if (year % modNumber == 0) {
        return true;
    }
    return false;
}

var isLeapYear = function(year) {
    var divides4 = yearDivides(year, 4),
        divides100 = yearDivides(year, 100),
        divides400 = yearDivides(year, 400);
    if (divides4 && !(divides100 && !divides400)) {
        return true;
    }
    return false;
}

var populateYears = function(elem) {
    var innerHTML = "";
    var maxDate = (new Date).getFullYear();
    var minDate = maxDate - 119;
    for (var i=maxDate; i >= minDate; i--) {
        innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
    }
    elem.innerHTML = innerHTML;
}

window.onload = function() {
    var monthElem = document.querySelector("#month");
    var daysElem = document.querySelector("#day");
    var yearsElem = document.querySelector("#year");
    populateMonths(monthElem);
    populateDays(daysElem, monthElem);
    populateYears(yearsElem);
    monthElem.addEventListener("change", function() {
        populateDays(daysElem, monthElem);
        toggleLeapYear(monthElem, dasyElem, yearsElem);
    });
    yearsElem.addEventListener("change", function() {
        toggleLeapYear(monthElem, dasyElem, yearsElem);
    });
}