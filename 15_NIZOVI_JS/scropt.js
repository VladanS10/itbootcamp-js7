let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];

console.log(numbers);

let random = [6, "Vladan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined; -- Ovo je nacin da se uklini element iz niza

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// 2. Zadatak

let niz = [1, 8, 11, 5, 2, 11, 11, 11];
let niz2 = [6, -9, 0, 0, 3]
let niz3 = [1, 4]

let sumaElemenata = niz => {
    let suma = 0;

    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    return suma;
}
console.log(`Suma elemenata prvog niza je ${sumaElemenata(niz)}`);
console.log(`Suma elemenata drugog niza je ${sumaElemenata(niz2)}`);
console.log(`Suma elemenata treceg niza je ${sumaElemenata(niz3)}`);


// 3. Zadatak
let proizvodElemenata = niz =>{
    let proizvod = 1
    for(let i = 0; i < niz.length; i++){
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));



// 4.Zadatak

//Prvi nacin

let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
        broj++;
    }
    return (broj != 0) ? suma / broj : 0;
}


// Drugi nacin

let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

// Treci nacin 

let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(niz));
console.log(arSr3(niz2));
console.log(arSr3(niz3));

// 4`. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            suma+= niz[i];
            broj++
        }
    }
    return broj == 0 ? 0 : suma / broj;
}
console.log(arSrParnih(niz2));


// 5. Zadatak

// let maxVrednost = niz => {
//     let max = niz[0];
//     for(let i = 1; i < niz.length; i++){
//         if(niz[i] > max){
//             max = niz[i];
//         }
//     }
//     return max;
// }
// console.log(maxVrednost(niz));


 // 6. Zadatak

let minVrednost = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minVrednost(niz));


// 7. Zadatak

let najveciIndex = niz =>{
    let max = niz[0];
    let brojac = 0;
    for(let i = 1; i < niz.length; i++){
        if(max < niz[i]){
            max = niz[i];
        }
    }
    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            brojac++; 
        }
    }
    return brojac;
}
console.log(najveciIndex(niz));

// 8. Zadatak

let najmanjiIndex = niz =>{
    let min = niz[0];
    let iNajmanji = 0;
    for(let i = 1; i < niz.length; i++){
        if(min > niz[i]){
            min = niz[i];
        }
    }
    for(let i = 1; i <niz.length; i++){
        if(min == niz[i])
        {
            iNajmanji++; 
        }
    }
    return iNajmanji;
}
console.log(najmanjiIndex(niz));

// 16. Zadatak

let niz4 = ['Hleb', 'Jogurt', 'Sok', 'Sir'];

let kupiti = niz => {
    // console.log(niz4);
    let lista = "";
    lista += "<ul>"
    for(let i = 0; i < niz4.length; i++){
        lista += `<li>${niz4[i]}</li>`;
    }
    lista += "</ul>";
    return lista;
}
// document.body.innerHTML += kupiti(niz)
document.getElementById('d1').innerHTML += kupiti(niz)
// 17. Zadatak 

let niz5 = ['Denver', 'Dalas', 'Chicago', 'San Antonio', 'Brooklyn'];

let kosarka = niz => {
    let taleba = "<table>";
    
    for(let i = 0; i < niz5.length; i++){
        taleba += `<tr><td>${niz5[i]}</td></tr>
        `
    }
    taleba += "</tabela>"
    return taleba;
}

// kosarka(niz5);
document.getElementById('d2').innerHTML += kosarka(niz)

let niz6 = ["https://cenoteka.rs/assets/images/articles/coca-cola-2l-1004712-large.jpg",
"https://www.hitauto.rs/images/slider/renault-clio-lpg-tng-fabricki-plin-akcija-hit-auto.jpg",
"https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
]

let slike = niz => {
    let rez = "";
    for(let i = 0; i < niz.length; i++){
        rez += `
        <img src="${niz[i]}">
        `
    }
    return rez;
}
document.getElementById('d3').innerHTML += slike(niz6);

// 19. Zadatak
// Ispisati dužinu svakog elementa u nizu stringova. 
let niz7 = ["Voda", "PijacaVoda", "LedenaVod", "GasovitaVoda"];

let duzina = niz => {
    for(let i = 0; i < niz.length; i++){
        console.log(niz[i].length);
    }
}
duzina(niz7)

// 20. Zadatak
// Odrediti element u nizu stringova sa najvećom dužinom.
let niz8 = ["Voda", "PijacaVoda", "LedenaVod", "GasovitaVoda"];

let elementi = niz => {
    let max = niz[0].length;
    let maxString = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(max < niz[i].length){
            max = niz[i].length;
            maxString = niz[i]
        }
    }
    return maxString;
}

console.log(elementi(niz8));


// 21. Zadatak
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu
let niz9 = ["Voda", "PijacaVoda", "LedenaVod", "GasovitaVoda"];

let prosecnaDuzina = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        suma = suma + niz[i].length;
        broj++;
    }
    return broj != 0 ? suma / broj : 0
}

let brojVeciProsDuz = niz =>{
    let broj = 0;
    let pd = prosecnaDuzina(niz);
    for(let i = 0; i < niz.length; i++){
        if(niz[i].length > pd){
            broj++;
        }
    }
    return broj;
}

console.log(prosecnaDuzina(niz9));
console.log(brojVeciProsDuz(niz9));

// 22. Zadatak
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let niz10 = ["Voda", "PijacaVoda", "LedenaVod", "GasovitaVoda"];

let brA = niz =>{
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i].includes("a")){
            broj++;
        }
    }
    return broj;
}
console.log(brA(niz10));

// 22. Odrediti broj pojavljanja slova 'a' u nizu stringova
// Nastavak 21-og zadatka
let brAKaraktera = niz =>{
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        // niz[i] je string
        let element = niz[i];
        // Sada prolazimo kroz sve karaktere stinga elementa
        for(let j = 0; j < element.length; j++){
            if(element[j] == "a" || element[j] == "A"){
                broj++
            }
        }
    }
    return broj;
}
console.log(brAKaraktera(niz10));