import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Vladan", 186, 83);
let p2 = new Pacijent("Ana", 180, 72);
let p3 = new Pacijent("Pera", 190, 140);
let p4 = new Pacijent("Mika", 167, 67);
let p5 = new Pacijent("Mila", 150, 70);

let pacijenti = [p1, p2, p3, p4, p5];

// Ispisati podatke o pacijentu sa najmanjom tezinom
let btnMinTez = document.getElementById('minTez');
let spanMinTez = document.getElementById('minTezRez')
btnMinTez.addEventListener('click', ()=>{
    
    let min = pacijenti[0];
    pacijenti.forEach(p =>{
        if(min.tezina > p.tezina){
            min = p;
        }
    });
    spanMinTez.innerHTML = min.stampajListu();
});


// Ispisati podatke o pacijentu sa najvecim BMI

let btnMaxBMI = document.querySelector('#maxBMI')
let maxBMIRez = document.querySelector('#maxBMIRez')

btnMaxBMI.addEventListener('click', ()=>{
    let maxBMI = pacijenti[0]; // Pretpostavka je da prvi pacijent ima max BMI
    for(let i = 1; i < pacijenti.length; i++){
        if(maxBMI.bmi() < pacijenti[i].bmi()){
            maxBMI = pacijenti[i]
        }
    }

    maxBMIRez.innerHTML = maxBMI.stampajListu();
});
