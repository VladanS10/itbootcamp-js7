// let a = 1;

// while(a <= 5){
//     console.log(`Na redi je broj ${a}`);
//     a++;
// }

// for(let i=1; i<=5; i++){
//     console.log(`For petlja iteracija ${i}`);
// }


// ZADATAK 2

// for(i = 20; i >= 1; i--) {
//     console.log(i);
// } 

// ZADATAK 3

//1. nacin

// for(i = 1; i <= 20; i++){
//     if( i %2 == 0) {
//         console.log(i);
//     }
// }

//2.nacin

// for(i = 2; i <= 20; i+=2){
//     console.log(i);
// }

//3. nacin
// for(i = 2; i <= 20; i=i+2){
//         console.log(i);
        
//      }

// ZADATAK 4
// for(i = 5; i <= 15; i++) {
    
// }

// ZADATAK 5
// let n = 100;
// let suma = 0;
// for(let i = 1; i<=n; i++){
//     suma += i;
// }
// console.log(suma); 

// //ZADATAK 6
// n = 2;
// let m = 6;
// let p = 1;
// for(i=n; i<=m; i++) {
//     p *= i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

// // ZADATAK 9
// /* <img src="img/1.jpg">
// <img src="img/2.jpg">
// <img src="img/3.jpg"> */
// for(let i=1; i<=3; i++){
//     document.body.innerHTML += `<img style="padding: 10px" src="img/${i}.jpg">`;
// }

// ZADATAK 11
// let br = 0;
// for(let i = 5; i<= 150; i++){
//     if(i % 13 == 0){
//         br++;
//     }
// }
// console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);

// ZADATAK 12

// let n = 5;
// let m = 10;
// let suma = 0;
// let br = 0;
// for(i=n; i<=m; i++){
//     suma +=i;
//     br++;
// }
// let arsr = suma / br;
// console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`);


// ZADATAK 13
// let n = -11;
// let m = 25;
// let suma = 0;
// let suma1 = 0;
// for(i = n; i<=m; i++){
//     if(i < 0 ) {
//         suma++;
//     }
//     if(i >= 0){
//         suma1++;
//     }
// }
// console.log(`Od ${n} do 0 ima ${suma} negativnih brojeva `);
// console.log(`Od 0 do ${m} ima ${suma1} pozitivnih brojeva ukljucujuci i 0`);


// ZADATAK 14
// let n = 5;
// let m = 50;
// let suma = 1;
// for(let i = n; i <=m; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//         suma++;
//     }
// }
// console.log(suma);


// ZADATAK 15

// let n = 3;
// let m = 45;
// let suma = 0;
// let br = 0;
// for(i = n; i<=m; i++){
//     if(i % 10 == 4) {
//         suma += i;
//         br++;
//     }
// }
// console.log(`Suma brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je: ${suma}`);
// console.log(`Broj brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je: ${br}`);


// ZADATAK 16

// n = 5;
// m = 10;
// let a = 3;
// let suma = 0;
// for(let i = n; i<=m; i++){
//     if(i % a != 0){
//         suma +=i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je: ${suma}`);


// ZADATAK 18
// FOR Petljom
// let k = 7;
// let suma = 0;
// for(let i = 1; i<=k; i++){
//     if(k%i == 0){
//         suma++;
//     }
// }
// console.log(`Broj ${k} je deljiv sa ${suma} brojva`);

// // WHILE Petljom
// suma = 0;
// i = 1;
// while(i <= k){
//     if(k%i == 0){
//     suma++;
//     }
//     i++;
// }
// console.log(`Broj ${k} je deljiv sa ${suma} brojva`);

// // ZADATAK 19
// if(suma == 1){
//     console.log(`Broj nije ni prost ni slozen`);
// }
// else if(suma == 2) {
//     console.log(`Broj je prost`);
// }
// else {
//     console.log(`Broj je slozen`);
// }

// ZADATAK 20

let tabela= `<table border="1">`;
    for(let red = 1; red <= 6; red++){
        if (red % 2 == 0){
            tabela +=
            `
            <tr class="roze">
                <td>TEKST</td>
                <td>TEKST</td>
            </tr>
           `;
           }
           else{
            tabela +=
            `
            <tr>
                <td>TEKST</td>
                <td>TEKST</td>
            </tr>
           `;
           }
           
       }
       tabela += `</table>`;
       document.body.innerHTML += tabela;
