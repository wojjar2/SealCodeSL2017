function tabliczkaMnozenia(){
     var tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     var tab2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     var tab3 = [];
     var i=0;
     var j=0;
    for (i= 0; i < tab1.length; i++){
        for (j= 0; j < tab2.length; j++){
            x = (j+1) * (i+1);
            tab3[i,j] = x;
    }
    console.log(tab3); 
}
  

}
//wywolanie!!!
//tabliczkaMnozenia();

function searchElTab(tab,elem){
    var znaleziono = 'N';
    var wynik = [];
    elem = elem.toString();
    for (i= 0; i < tab.length; i++){
        tab[i] = tab[i].toString();
        if (tab[i]==elem){
            znaleziono = 'TAK';
            wynik = [elem,(i+1)]
            return( wynik );
            
        }
    }   
    
    if (znaleziono == 'N'){
    wynik = [elem , -1]; 
    return(wynik);
    
    }
}

var tablica = [1, 2, 3, 4, 5, 6, 7, 8, 5, 10];
var szukany = 33 ;
var tablica1 = ['a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','pieter_lec'];
var szukany1 = 'pieter_lec' ;

//wywolanie
//console.log(searchElTab(tablica1,szukany1));

function zwrocBinarke (x){
    var reszta = 0;
    var wynik = '';
    while (x != 0){
        reszta = (x % 2);
        x = Math.floor(x/2);
        wynik = wynik + (reszta.toString()) ;
    }
    return(wynik.split("").reverse().join(""));
}

//wywolanie
// console.log(zwrocBinarke(118));