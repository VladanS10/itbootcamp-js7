// function ispisKonzola(niz){
//     let rez = "";
//     for(let i = 0; i < niz.length; i++){
//         rez += niz[i] + " ";
//     }
//     console.log(rez);
// }

// function ispisHTML(niz) {
//     let rez = "";
//     for(let i = 0; i < niz.length; i++){
//         rez += niz[i] + " ";
//     }
//     document.body.innerHTML += `<div>${rez}</div>`;
// }

function ispisKonzola(poruka){
    console.log(poruka);
}
function ispisStranica(poruka){
    document.body.innerHTML += `<div>${poruka}</div>`;
}
function ispisNiza(niz, cb) {
    let rez = "";
     for(let i = 0; i < niz.length; i++){
         rez += niz[i] + " ";
     }
     cb(rez);
}
let brojevi = [1, 6, -4, 9]
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);

// ispisKonzola(brojevi);
// ispisHTML(brojevi);

// Isti zadatak samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function(poruka){
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka){
    document.body.innerHTML += `<div style="font-size: 25px; background: red">${poruka}</div>`;
});

// Isti zadatak samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka =>{
    document.body.innerHTML += `<div style="font-size: 35px; background: blue">${poruka}</div>`;
});


// a) odredi broj maksimalnih elemenata u celobrojnom nizu
// b) odredi broj minimalnih elemenata u celobrojnom nizu

function maxEl(niz) {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz){
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

function brojSvojstvaNiz(niz, svojstvo){
    let s = svojstvo(niz)
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] == s){
            broj++;
        }
    }
    return broj;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvaNiz(temperature, maxEl));
console.log(brojSvojstvaNiz(temperature, minEl));



