function suma(a, b){
    return a + b;
}
console.log(suma(4, 5)); // poziv funkcije
console.log(suma(1, 0)); // poziv funkcije

// Anonimne funkcije

let suma2 = function (a, b){
    return a + b;
}
console.log(suma2(6, 6));

// ARROW funkcija

let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(5, 3));


// ARROW funkcija za ispis poruke

// Primer 1

let hello = () => {
    console.log(`Hello World!`);
}
hello();

// Primer 2

let pozdrav = (ime, prezime) => {
    console.log("Zdravo " + ime + " " + prezime);
}
pozdrav('Kristian', 'Zdravkovic');
pozdrav('Vladan', 'Stojic');

// ARROW funkcija kojoj se prosledjuje ime i godine korisnika a ona ispisuje ime i da li je korisnik punoletan ili nije

let ispis = (ime, godine) => {
    if(godine < 18){
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color: blue; font-size: 35px">${poruka}</p>`
    }
    else{
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color: green; font-size: 35px">${poruka}</p>`
    }
}
ispis("Vladan", 25);
ispis("Stojic", 17);


// 3. Zadatak

let neparan = (n) => {
    if(n % 2 == 0){
        console.log(false);
    }
    else{
        console.log(true);
    }
}
neparan(5);

// 4. Zadatak

let maks2 = (n, m) => {
    if(n > m){
        
        return n;
    }
    else if(m > n) {
        
        return m;
    }
    else{
        console.log(`Brojevi su isti`);
    }
}
let rezultat = maks2(5,3);
console.log(`Veci broj je: ${rezultat}`);




let maks4 = (z, x, c, v) =>{
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
        return v;
    }
    else{
        return "Brojevi su jednaki";
    }
}

let rezultat1 = maks4(8,32,6,66);
console.log(`Najveci broj od unetih je: ${rezultat1}`);

// 5. Zadatak

let slika = (src) => {
    document.body.innerHTML += `<img src="${src}">`
}

slika("https://autoskolapravo.com/wp-content/uploads/2019/10/auto-skola-upis.png");


// 6. Zadatak

let boja = (izabrati) => {
    document.body.innerHTML += `<p style="color: ${izabrati} ;font-size: 50px"> Ovo je paragraf</p>`;
}
boja("red");

// 7. Zadatak ?????

// let sedmiDan = n => {
//     switch(n){

//         case 0:
//             console.log(`Danas je Nedelja`);
//             break;
//         case 1:
//             console.log(`Danas je Ponedeljak`);
//             break;
//         case 2:
//             console.log(`Danas je Utorak`);
//             break;
//         case 3:
//             console.log(`Danas je Sreda`);
//             break;
//         case 4:
//             console.log(`Danas je Cetvrtak`);
//             break;
//         case 5:
//             console.log(`Danas je Petak`);
//             break;
//         case 6:
//             console.log(`Danas je Subota`);
//             break;
//         default:
//             console.log(`Pogresan unos`);
//         }

// }
// sedmiDan(1)


// // 8. Zadatak ?????
// let deljivSaTri = (n, m) => {
//     let suma = 0
//     for(let i = n; i<=m; i++){
//         if(i % 3 == 0){
//             suma++;
//         }
//     }
//     console.log(suma);
// }
// deljivSaTri(1,6);

// // 9. Zadatak

// let sumiraj = (n, m) =>{
//     let suma = 0
//     for(let i = n; i<=m; i++){
//             suma++;
//     }
//     console.log(suma);
// }
// sumiraj(1,5);

/// 7. ZADATAK ISPRAVAK

let sedmiDan = n => (n % 7 == 0) ? "Nedelja": (n % 7 == 1) ? "Ponedeljak": (n % 7 == 2) ? "Utorak": (n % 7 == 3)?"Sreda": (n % 7 == 4) ?"Cetvrtak":(n % 7 == 5) ? "Petak": "Subota"

for(i=0; i < 7; i++){

    console.log(sedmiDan(i));
}