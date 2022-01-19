import Auto from "./auto.js";

let a1 = new Auto("Hyundai", "Crvena", true);

console.log(a1);
console.log(typeof a1);


let a2 = new Auto("BMW", "Beo", false);

console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "Crn", true)

console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3.brojVrata = 5
console.log(a3);

let a4 = new Auto("FP", undefined, true);
a4._imakrov = false;
console.log(a4);


a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

// U klasi pisemo polja i metode
// Sva polja klase se definisu u constructor
// Mozemo dodavati proizvoljne metode
// Svi objekti klase imace polja i metode navedene u klasi

a1._brVrata = 4; // Poljima se pristupa bez zagrada
a1.sviraj(); // Metode imaju zagrade, a izmedju zagrada parametar
a1.marka = "   Audi A4"; // seter marka
// a1.postaviMarku("    Audi A4");
console.log(a1);
console.log(a1.marka); // geter marka

let a5 = new Auto("   Audi A4", "plava", false, 3);

console.log(a5);

a3.stampaj();