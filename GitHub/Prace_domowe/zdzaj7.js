var header = document.getElementById('heading');
var par1 = document.getElementById('paragraph-one');
var par2 = document.getElementById('paragraph-two');
var par3 = document.getElementById('paragraph-three');
var par4 = document.getElementById('paragraph-four');

//header
header.innerHTML = "Wojtek Jarzębiński";

//paragraph-one
var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var dayofmonth = d.getDate();
var year = d.getFullYear();
var hour = d.getHours();
var minute = d.getMinutes();
var milisecond = d.getMilliseconds();
var second = d.getSeconds();

var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months  = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];

par1.innerHTML = "Data, która pojawi się przy otwarciu tej strony to: " + daysOfWeek[day] + ", " + dayofmonth + ", " + months[month] + ", " + year + "r" + "<br />" + "Godzina w momencie otwarcia strony: " + hour + ":" + minute + ":" + second + ":" + milisecond ;
var miesiac = ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]
// paragraph-two
var zdanie = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";
var podzial = zdanie.split(',');


par2.innerHTML = "Operuje na zdaniu: " + zdanie+ "<br />" 
+ "Znaki pomiędzy 7. a 12. pozycją to: " + zdanie.substring(6,12).toString() + "<br />" 
+ "Pierwszy raz znak 'ą' pojawia się na miejscu:"  + (zdanie.indexOf('ą') + 1) + "<br />"
+ "Ten ciąg ma (ilość) znaków : " + zdanie.length + "<br />"
+ "Po zamianie 'podstawą' na 'fundamentem' mamy: " + (zdanie.replace('podstawą','fundamentem')) + "<br />"
+ "Część zdania przed przecinkiem to: "  +podzial[0] + "<br />"
+ "Druga część zdania po odwróceniu to: " +(podzial[1].split("").reverse().join("")) + "<br />";

//paragraph-three
//f(x) = x^2 + 5x + 6]
var a = 1;
var b = 5;
var c = 6;
var delta = Math.pow(b,2) - (4*a*c);
var sqrtDelta = Math.sqrt(delta);
var x1 = (-b - sqrtDelta) / (2*a);
var x2 = (-b + sqrtDelta) / (2*a);

par3.innerHTML = "Mam funkcję kwadratową:" + "<br />"+ "f(x) = x^2 + 5x + 6 " + "<br />" + "Wyróżnik tego trójmianu to: " + delta + "<br />" +  "Pierwiastek kwadratowy tego wyróżnika to: " + sqrtDelta + "<br />" + "Miejscami zerowymi tej funkcji są: " + x1 +" i " + x2;

//paragraph-four
var wynik=Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2,Math.PI/6))) + Math.max(0, Math.PI/6) + Math.abs(-Math.pow(Math.E,(2*Math.PI/6)) + Math.min(-1, Math.PI/6))));
    
par4.innerHTML = "Obliczam wartość funkcji:" + "<br />" + "f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) dla x = pi/6" + "<br />" + "Mój wynik to: " + wynik + "<br />" + "Wynik w notacji wykładniczej to: " + wynik.toExponential() + "<br />" +"Po zaokrąleniu wyniku w górę mam:" +Math.ceil(wynik);
/*
Obliczam wartość funkcji:
f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) // ln() to logarytm naturalny
dla x = pi/6.

Mój wynik to: (liczba).
Wynik w notacji wykładniczej to: (liczba w notacji wykładniczej).
Po zaokrąleniu wyniku w górę mam: (liczba).
*/