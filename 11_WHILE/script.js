// let i = 1;
// console.log(i); // 1
// i++;
// console.log(i); // 2
// i++;
// console.log(i); // 3
// i++;
// console.log(i); // 4
// i++;
// console.log(i); // 5
// i++;

// let i = 1;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }
// console.log(`Vrednost promenljive je i je: ${i}`);

// // ZADATAK 1

// // a) Svaki broj u posebnom redu

// i = 1;
// while(i <= 20){
//     console.log(i);
//     i++;
// }

// // b) Svi brojevi u istom redu

// let rez = "";
// i = 1;
// while(i <= 20) {
//     rez += i + " ";
//     i++;
// }
// console.log(rez);

// // ZADATAK 2

// i = 20;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

// // ZADATAK 3

// i = 1;
// while(i <= 20) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }

// // Drugi nacin
// i = 2;
// while( i <= 20){
//     console.log(i);
//     i+=2;
// }

// // document.body.innerHTML += "<p style='color: red'>Prvi paragraf</p>"
// // document.body.innerHTML += "<p style='color: purple'>Drugi paragraf</p>"
// // document.body.innerHTML += "<p style='color: green'>Treci paragraf</p>"
// // document.body.innerHTML += "<p style='color: red'>Cetvrti paragraf</p>"
// // document.body.innerHTML += "<p style='color: purple'>Peti paragraf</p>"
// // document.body.innerHTML += "<p style='color: green'>Sesti paragraf</p>"

// let n = 16;
// i = 1;
// while (i <= n){
//     if(i % 3 == 1) {
//         document.body.innerHTML += `<p style='color: red'>${i} paragraf</p>`
//     }else if(i % 3 == 2){
//         document.body.innerHTML += `<p style='color: purple'>${i} paragraf</p>`
//     }else {
//         document.body.innerHTML += `<p style='color: green'>${i} paragraf</p>`
//     }
//     i++;
// }

// // ZADATAK 6 
// //Odrediti sumu brojeva od 1 do 100

// i = 1;
// let suma = 0;
// while(i <=100) {
//     // Iskoristi i tako da se odredi suma
//     suma += i;
//     i++;
// }
// console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);

// // ZADATAK 7

// // Odrediti sumu brojeva od 1 do n
// n = 18;
// i = 1;
// suma = 0;
// while(i <= n){
//     suma += i;
//     i++;
// }
// console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);

// // ZADATAK 8

// let m = 10;
// n = 2;
// i = n;
// suma = 0;
// while(i <= m) {
//     suma += i;
//     i++;
// }
// console.log(`Zbir brojeva od ${n} do ${m} jednak je ${suma}`);


// // ZADATAK 9
// // Odrediti proizvod brojeva od n do m

// n = 4;
// m = 6;
// i = n;
// let proizvod = 1;
// while(i <= m) {
//     proizvod *= i;
//     i++;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);


// ZADATAK 10
// n = 4;
// m = 9;
// i = n;
// let sumaKv = 0;
// let suma = 0;
// while(i <= m){
//     if(i % 2 == 0){
//         sumaKv = sumaKv + i*i;
//     }
//     if (i % 2 == 1) {
//         suma = suma + (i * i * i);
//     }
//     i++;
// }
// console.log(`Kvadrat parnih brojeva je ${sumaKv}`);
// console.log(`Broj na treci svih negativnih je ${suma}`);


// ZADATAK 11 
let nekiBroj = 50;
let k = 5;
let suma = 0;
i = 1;
while (i <= nekiBroj) {
    if (i % k == 0) {
        suma += 1
        console.log(`Broj ${k} je deljiv sa brojem ${i}`);
    }
    i++;
}
console.log(`Ukupan broj deljivih sa ${k} je ${suma} broja`);

