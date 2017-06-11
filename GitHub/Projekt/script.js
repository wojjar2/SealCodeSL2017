var data = document.getElementById('date');

var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var dayofmonth = d.getDate();
var year = d.getFullYear();

var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months  = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];

data.innerHTML =  daysOfWeek[day] + ",  " + dayofmonth + " " + months[month] + " " + year;