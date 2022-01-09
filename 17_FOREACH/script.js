let a = [1, 9, -6, 5, 0];

// function ispis(elem){
//     console.log(`element niza je: ${elem}`);
// }
// a.forEach(ispis);

a.forEach(elem => {
    console.log(`Element je: ${elem}`);
});

// Odrediti zbir celobrojnog niza

let zbir = niz =>{
    let s = 0;
    niz.forEach(el =>{
        s += el;
    });
    return s;
};
let zbirParnih = niz =>{
    let s = 0;
    niz.forEach(el =>{
        if(el % 2 ==0){
            s += el;
        }
    });
    return s;
};
let zbirElParnihIndex = niz =>{
    let s = 0;
    niz.forEach((el, index) =>{
        if(index % 2 ==0){
            s += el;
        }
    });
    return s;
};

console.log(zbir(a));
console.log(zbirParnih(a));
console.log(zbirElParnihIndex(a));


// 3. Zadatak

let proizvodEl = niz =>{
    let pr = 1;
    niz.forEach(elem => {
        pr *= elem;
    });
    return pr;
};
console.log(proizvodEl(a));


// 4. Zadatak

let srVrednost = niz =>{
    let zbir = 0;
    
    niz.forEach(elem =>{
        zbir += elem;
    });
    return niz.lenth != 0 ? zbir / niz.lenth : 0
};
console.log(srVrednost(a));


// 5. Zadatak

let maxVrednost = niz =>{
    let max = niz[0];
    niz.forEach(elem =>{
        if(elem > max){
            max = elem;
        }
    });
    return max;
};

console.log(maxVrednost(a));


// 6. Zadatak

let minVrednost = niz =>{
    let min = niz[0];
    niz.forEach(elem =>{
        if(elem < min){
            min = elem;
        }
    });
    return min;
};

console.log(minVrednost(a));

// 7. Zadatak
// Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxIndex = niz =>{
    let max = niz[0];
    let imax = 0;
    niz.forEach((elem, i) => {
        if(elem > max){
            max = elem;
            imax = i;
        }
    });
    return imax;
}
console.log(maxIndex(a));


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

let indexSvojstvo = (niz, svojstvo) =>{
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) =>{
        if(el == s){
            index = i;
        }
    });
    return index;
};
console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));



