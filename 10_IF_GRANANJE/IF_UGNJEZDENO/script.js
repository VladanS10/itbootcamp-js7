// Zadatak 19

let a = 5;
let b = 2;
let c = 4;
if(a > b){
    if(a > c){
        console.log(`Broj ${a} je najveci broj`);
        if(b > c){
            console.log(`Broj ${b} je srednji broj`);
            console.log(`Broj ${c} je najmanji broj`);
        }
        else{
            console.log(`Broj ${c} je srednji broj`);
            console.log(`Broj ${b} je najmanji broj`);
        }
    }
    else{
        console.log(`Broj ${a} je srednji`);
        if(b > c) {
            console.log(`Broj ${b} je najveci`);
            console.log(`Broj ${c} je najmanji`);
        }
        else {
            console.log(`Broj ${b} je najmanji`);
            console.log(`Broj ${c} je najveci`);
        }
    }

}