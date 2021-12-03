console.log(25);

// 1. Prvo ide NEGACIJA
// 2. drugo ide AND
// 3. trece ide OR
// if(itrue && true || false) --> (false && true || false) --> (false || false) -->
//
let pol = "m";
let god = "27";


if(pol == "m" && god >= 18 ) {
    console.log("Osoba je muskog pola i punoletna je");
}else if (pol == "m" && god < 18 && god >=0) {
    console.log("Osoba je muskog pola i maloletna je");
}else if (pol == "z" && god >= 18) {
    console.log("Osoba je zenskog pola i punoletna je");
}else if (pol == "z" && god < 18 && god >= 0) {
    console.log("Osoba je zenskog pola i maloletna je");
}else {
    console.log("Pogresan unos");
}

pol = "m";
if (pol == "z" || pol == "Z" || pol == "ž" || pol =="Ž") {
   document.body.innerHTML = `<img src="img/z.jpeg">`; 
}else if (pol == "m" || pol == "M"){
    document.body.innerHTML = `<img src="img/M.png">`;
}else {
    document.body.innerHTML = `<p>Pogresan unos</p>`;
}
document.body.innerHTML += "<hr>Hello World<hr>";

/////////////////

// Kombinacija prethodna dva

pol = "Z";
god = "15";
if((pol == "z" || pol == "Z" || pol == "ž" || pol =="Ž") && god >= 18){
    console.log("Osoba je zenskog pola i punoletna");
}else if((pol == "z" || pol == "Z" || pol == "ž" || pol =="Ž") && god < 18 && god >= 0){
    console.log("Osoba je zenskog pola i maloletna");
}else if ((pol == "m" || pol == "M") && god >= 18){
    console.log("Osoba je muskog pola i punoletna");
}else if ((pol == "m" || pol == "M") && god < 18 && god >= 0){
    console.log("Osoba je muskog pola i maloletan");
}else{
    console.log("Pogresan unos");
}

