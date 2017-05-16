//1
var h1 = document.querySelector('h1');
h1.removeAttribute('class');
//2
var str = "rotakifytnedi-ywon";
str = str.split("").reverse().join("");
h1.setAttribute('id', str);
//3
var linkpositiob = document.getElementsByClassName('wrapper')[0];
var link = document.createElement('a');
var ltxt = document.createTextNode('LINK DO STRONY SEALCODE');
link.appendChild(ltxt);
link.setAttribute('class', 'new-class');
link.setAttribute('href', 'https://forum.sealcode.org/');
link.setAttribute('target', 'blank');
linkpositiob.appendChild(link);
//4
var ellista = document.querySelector('li');
for (var i = 1; i < 9; i++) {
	var parantnode = ellista.parentNode;
    parantnode.removeChild(ellista);
    ellista = document.querySelector('li');
    
}

var lista = document.querySelector('ul');
for(var j=1 ; j < 31; j++ ){
    
    var newlistel = document.createElement('li')
    newlistel.setAttribute('id', 'new'+j);
    var tekstlist = document.createTextNode('Nowa treść ' + j);
    newlistel.appendChild(tekstlist);
    lista.appendChild(newlistel);

}
//5
var p = document.querySelector('p');
var tekstp = p.firstChild;
p.removeChild(tekstp);
var tekstpod = document.createTextNode('Zmieniona treść akapitu.');
p.appendChild(tekstpod);