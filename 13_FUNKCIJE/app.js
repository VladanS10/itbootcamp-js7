// console.log(15);

// function zdravo(){
//     console.log("Zdravo svete!!!");
// }
// zdravo();
// zdravo();
// console.log("Hello!");
// zdravo();

// ///////////////////////////////

// function stampaj(tekst){
//     console.log(tekst);
// }
// stampaj("Vladan");
// stampaj("Stojic");

// ime = "Sofija";
// stampaj(ime);

// //////////////////////

// function korisnik(ime, prezime){
//     console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
// }
// korisnik("Vladan", "Stojic");
// korisnik("Jelena", "Matejic");
// korisnik("Stefan", "Stanimirovic");

// ////////////////////////

// function korisnikGodine(ime, prezime, godine){
//     console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);
// }
// korisnikGodine("Vladan", "Stojic", 27);
// korisnikGodine("Pera", "Peric", 17);

// ///////////////////

// function zbirDvaBroja(x, y){
//     let zbir = x + y;
//     console.log(zbir);// ispisuje vrednost
// }
// zbirDvaBroja(15, 12)
// zbirDvaBroja(3, 9)

// /////////////////////

// function vratiZbirDvaBroja(a, b){
//     let zbir = a + b;
//     return zbir;
// }

// let rez = vratiZbirDvaBroja(50, 70);
// console.log(rez);
// rez = vratiZbirDvaBroja(16, 15);
// console.log(rez);

// let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10
// let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12
// let rez3 = vratiZbirDvaBroja(rez1, rez2); // rez3 = 22;
// console.log(rez3);

// let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
// console.log(rez4);

// let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7,9), 3);
// console.log(rez5);

// let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1,2), vratiZbirDvaBroja(5,3));
// console.log(rez6);

// ///////////////////

// function voda(temperatura){
//     console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
//     if(temperatura <= 0){
//         console.log(`Voda je u cvrstom agregatnom stanju`);
//     }
//     else if(temperatura >= 100){
//         console.log(`Voda je u gasovitom agregatnom stanju`);
//     }
//     else{
//         console.log(`Voda je u tecnom agregatnom stanju`);
//     }
// }
// voda(3);
// voda(100);

// 2. Zadatak ????
function racunaj(br1, br2, operacija){
    let rezultat = "";
    if(operacija == "+"){
        rezultat = br1 + br2;
    }
    else if (operacija == "-"){
        rezultat = br1 - br2;
    }
    else if (operacija == "*"){
        rezultat = br1 * br2;
    }
    else if(operacija == "/"){
        if(br2 == 0){
            rezultat = `Deljenje nulom nije dozvoljeno`;
        }
        else{
           rezultat = br1 / br2;
        }
    }
    else{
        rezultat = `Pogresan unos`;
    }
    console.log(rezultat);
};
racunaj(5,4,"+");
racunaj(5,4,"-");
racunaj(5,4,"*");
racunaj(5,4,"/");
racunaj(5,4,"%");
racunaj(5,0,"/");

// Primer 1 za scope i let
if(true){
    let test = "Zdravo";
    if(true){
        console.log(test); // Ovde vidi test
    }
}
// console.log(test); // Ovde ne vidi test jer je definisan sa let koji je vidljiv samo u if scope


// Primer 2 za scope i let
if(true){
    let test = "Zdravo";
    console.log(test);
    if(true){
        let test = "Hello";
        console.log(test);
    }
    console.log(test);
}
// console.log(test);

// LET vidim samo u okviru scope, dok VAR vidim i izvan scope
// Ako ne stavimo ni LET ni VAR ispred promenljive, promenljiva se racuna kao da je VAR

if(true){
    var promenljiva = "promenljiva";
    if(true){
        let promenljiva = "hmmm"
        console.log(promenljiva);
    }
    console.log(promenljiva);
}



// 3. Zadatak
function neparan(n){
    if(n % 2 != 0){

        return true;
    }
    else{
        return false;
    }
}
let nep = neparan(13);
console.log(nep);

function neparan1(n){
    let rez = true
    if(n%2 == 0){
        rez = false;
    }
    return rez;
}
let nep1= neparan1(6);
console.log(nep1);

function neparan2(n){
    return n%2 != 0;
}
let nep2 = neparan2(163);
console.log(nep2);


// 4. Zadatak
function max2 (a, b){
    if(a > b){
        return a;
    }
    else if(b> a){
        return b;
    }
    else{
        return "Brojevi su jednaki";
    }
}

let broj = max2(8, 7);
console.log(broj);

function max4 (z,x,c,v){
   if(z>x && z>c && z>v){
       return z;
   }
   else if(x>z && x>c && z>v){
       return x;
   }
   else if(c>z && c>x && c>v){
       return c;
   }
   else if(v>z && v>x && v>c){
       return c;
   }
   else{
       return "Brojevi su jednaki";
   }
}
let najveci = max4(29,25,282,412);
console.log(najveci);


// 5. Zadatak

// function slika(putanja){
//         document.body.innerHTML = `<img src="${putanja}">`
// }

// slika("https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg");

// 6. Zadatak????

function paragraf(boja){
        document.body.innerHTML +=`<p style="color: ${boja}">Ovo je paragraf ovojen ${boja}</p>`;
}
paragraf("blue");

// 7. Zadatak
let vreme = new Date();
let dan = vreme.getDay();
function sedmiDan(dan){
    switch(dan){

        case 0:
            console.log(`Danas je Nedelja`);
            break;
        case 1:
            console.log(`Danas je Ponedeljak`);
            break;
        case 2:
            console.log(`Danas je Utorak`);
            break;
        case 3:
            console.log(`Danas je Sreda`);
            break;
        case 4:
            console.log(`Danas je Cetvrtak`);
            break;
        case 5:
            console.log(`Danas je Petak`);
            break;
        case 6:
            console.log(`Danas je Subota`);
            break;
        default:
            console.log(`Pogresan unos`);
        }
    }
    sedmiDan(dan);

    let mesec = vreme.getMonth();
    function nMesec(mesec){
        switch(mesec){
            case 0:
                console.log(`Danas je Januar`);
                break;
            case 1:
                console.log(`Danas je Februar`);
                break;
            case 2:
                console.log(`Danas je Mart`);
                break;
            case 3:
                console.log(`Danas je April`);
                break;
            case 4:
                console.log(`Danas je Maj`);
                break;
            case 5:
                console.log(`Danas je Jun`);
                break;
            case 6:
                console.log(`Danas je Juli`);
                break;
            case 7:
                console.log(`Danas je Avgust`);
                break;
            case 8:
                console.log(`Danas je Septembar`);
                break;
            case 9:
                console.log(`Danas je Oktobar`);
                break;
            case 10:
                console.log(`Danas je Novembar`);
                break;
            case 11:
                console.log(`Danas je Decembar`);
                break;
            default:
                console.log(`Pogresan unos`);
            }
    }
    nMesec(mesec);

    // 8. Zadatak
    function deljivSaTri(n, m){
        let br = 0;
        for(let i = n; i <= m; i++){
            if(i%3 == 0){
                console.log(i);
                br++;
            }
        }
        console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je: ${br}`);
    }
    deljivSaTri(10, 30);

    // 9. Zadatak

    function sumiraj(n, m){
        let suma = 0;
        for(let i = n; i<=m; i++){
            suma++;
        }
        console.log(suma);
    }
    sumiraj(5, 10);


    // 14. Zadatak
    // Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
    
    function petPuta(recenica, boja){
        for(let i = 1; i<= 5; i++){
            document.body.innerHTML += `<p style="font-size:${i*10}px; color:${boja}">${recenica}</p>`;
        }
    }
    petPuta("Neki paragraf", "blue");

    // 15. Zadatak

    function praksa(n, a, d){
        for(let i= 1;i <= n; i++){
            a += a + d;
            console.log(a);
        }
        return a;
    }
    let pov = praksa(3, 1000, 150);
    // console.log(pov);


    // 16. Zadatak

    function most(t, p, n){
        let wait = n + p - t;
        if(p>t || t >= p + n){
            console.log(`Radi `);
        }
        else{
            console.log(`Krene kroz ${wait}`);
        }
    }
    most(17, 16,16);