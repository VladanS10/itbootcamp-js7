// console.log("IF-ELSE grananje");

// if(true){
//     console.log("Uslov je ispunjen");
// }else{
//     console.log("Uslov nije ispunjen");
// }

// if(false){
//     console.log("Uslov je ispunjen");
// }else{
//     console.log("Uslov nije ispunjen");
// }

// /////////////////////////////////

// a = 10;
// b = 7;

// if(a < b) {
//     console.log("Broj a je strogo manji od broja b");
// }else{
//     console.log(`Broj ${a} je veci ili jednak od broja ${b}`);
// }

// ////////////////////////
// let god = 27;
// if(god >= 18) {
//     console.log("Osoba je punoletna");
// }else{
//     console.log("Osoba je maloletna");
// }


// Zadatak 1

let a = 5;
let b = 7;

if (a > b){
    console.log(`Broj ${a} je veci od broja ${b}`);
}else{
    console.log(`Broj ${b} je veci od broja ${a}`);
}

// Zadatak 2
let temp = 25;
if(temp >= 0) {
    document.body.innerHTML = `<p style="color:red;"> Temperatura od ${temp} stepeni je u plusu</p>`;
}else {
    document.body.innerHTML = `<p style="color:blue;"> Temperatura od ${temp} stepeni je u minusu</p>`;
}

// Zadatak 3

let pol = "m";
if(pol == "m") {
    // Prikazi avatar muskarca
    document.body.innerHTML += `<img src="img/M.png">`; 
} else {
    // Prikazi avatar zene
    document.body.innerHTML += `<img src="img/z.jpeg">`;
}


// Zadatak 4
let date = new Date();
let sati = date.getHours();
if(sati >= 12) {
    console.log("Trenutno je popodne");
}else{
    console.log("Trenutno je jutro");
}




// Zadatak 5
let year = date.getFullYear();
let myAge = 1994;
if(year - myAge >= 18){
    console.log("Osoba je punoletna");
}else{
    console.log("Osoba je maloletna");
}




//Zadatak 6
let b1 = 5;
let b2 = 9;
let b3 = 7;

//Predpostavka
let maks = b1;

//Ako je moja pretpostavka losa, uradim njen update
if(maks < b2){
    maks = b2;
}
if(maks < b3) {
    maks = b3;
}
document.body.innerHTML += `<p>${maks}</p>`;
