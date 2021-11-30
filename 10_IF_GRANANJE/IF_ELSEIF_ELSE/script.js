let ocena = 4;

if(ocena == 5) {
    console.log("Odlican 5");
} else if (ocena == 4) {
    console.log("Vrlo dobar 4");
} else if (ocena == 3) {
    console.log("Dobar 3");
} else if (ocena == 2) {
    console.log("Dovoljan 2");
} else if (ocena == 1) {
    console.log("Nedovoljan 1");
} else {
    console.log("Pogresan unos");
}

console.log("Kod nakon if - else if");

///////////

// Zadatak 7 ???
let broj = 75;
if (broj < 50) {
    console.log("Pali ste ispit");
}
else if(broj < 60) {
    console.log("Ucenik je dobio ocenu 6");
}
else if(broj < 70) {
    console.log("Ucenik je dobio ocenu 7");
}
else if(broj < 80) {
    console.log("Ucenik je dobio ocenu 8");
}
else if(broj< 90) {
    console.log("Ucenik je dobio ocenu 9");
}
else if(broj <= 100) {
    console.log("Ucenik je dobio ocenu 10");
}
else {
    console.log("nije polozio");
}

// Zadatak 8

let data = new Date();
let danUNedelji = data.getDay();
console.log(danUNedelji);
if(danUNedelji == 0) {
    console.log("Danas je nedelja");
} else if (danUNedelji == 6) {
    console.log("Danas je subota");
}
else {
    console.log("Danas je radni dan");
}

// Zadatak 9
let vreme = data.getHours();
console.log(vreme);
if(vreme < 12) {
    console.log("Dobro jutro");
}
if(vreme < 18) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro Vece");
}

// Zadatak 10 ???
let d1 = 1;
let m1 = 5;
let g1 = 1880;

let d2 = 3;
let m2 = 8;
let g2 = 2010;

if (g1 < g2) {
    console.log("Prvi datum je raniji");
} else if (g1 > g2) {
    console.log("Drugi datum je raniji");
} else if (m1 < m2) {
    console.log("Prvi mesec je raniji");
} else if (m1 > m2) {
    console.log("Drugi mesec je raniji");
} else if (d1 < d2) {
    console.log("Prvi dan je raniji");
} else if (d1 > d2) {
    console.log("Drugi dan je raniji");
} else {
    console.log("Datumi su isti");
}

// Zadatak 11
if(vreme >= 9){
    console.log("Firma radi");
}
if(vreme < 17) {
    console.log("Firma radi");
}else {
    console.log("Firma ne radi");
}

// Zadatak 12
let p1 = 7;
let k1 = 15;
let p2 = 9;
let k2 = 17;
if(k1 < p2) {
    console.log("Ne preklapaju se");
} else if (k2 < p1) {
    console.log("Ne preklapaju se");
} else{
    console.log("Preklapaju se");
}

// Zadatak 13
 let p = 35
	if (p % 2 == 0) {
        console.log("Paran je broj");
    }
	else {
        console.log("Neparan broj");
    }

    // Zadatak 14

    let deljiv = 70;

    if(deljiv % 3 == 0) {
        console.log("Deljiv je sa 3");
    } else {
        console.log("Nije deljiv sa 3");
    }

    // Zadatak 15

    let br1 = 25;
    let br2 = 17;

    if(br1 > br2) {
        console.log(br1 - br2);
    } else {
        console.log(br2 - br1);
    }

    // Zadatak 16
    let unetiBroj = 3;
    if(unetiBroj <= 0) {
        unetiBroj--
        console.log(unetiBroj);
    } else {
        unetiBroj++
        console.log(unetiBroj);
    }

    // Zadatak 17

    let broj1 = 45;
    let broj2 = 65;
    let broj3 = 35;

    //Najveci broj
    let max = broj1;
    if(max < broj2){
        max = broj2;
    }
    if(max < broj3){
        max = broj3;
    }
    console.log(`Najveci broj je ${max}`);

    //Najmanji broj
    let min = broj1;
    if(min > broj2){
        min = broj2;
    }
    if(min > broj3){
        min = broj3;
    }
    console.log(`Broj ${min} je najmanji broj`);

    //Srednji broj
    let srednji = broj1 + broj2 + broj3 - min - max;
    console.log(`Srednji broj je ${srednji}`);

    // Zadatak 18
    //1. Nacin
    let s = 25.34;
    if (s % 1 == 0) {
        console.log(`Broj ${s} je ceo broj`);
    }else {
        console.log(`Broj ${s} nije ceo broj`);
    }

    //2. Nacin

    console.log(Math.floor(s));
    if(Math.floor(s) == s){
        console.log(`Broj ${s} je ceo broj`);
    }else{
        console.log(`Broj ${s} nije je ceo broj`);

    }