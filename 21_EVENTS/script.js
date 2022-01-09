console.log("Events");


// 1. Dohvati HTML element na koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

// 2. Na element postavljamo osluskivac
pKlikni.addEventListener('click', ()=>{
    console.log("Jednom kliknuto na paragraf");
    pKlikni.style.color = "blue"
});

let pKlikniDva = document.getElementById('dvaKlika')

pKlikniDva.addEventListener("dblclick", ()=>{
    console.log("kliknuli smo dva puta");
    pKlikniDva.style.color = "red"
});


////////////////////
let btnPlus = document.getElementById("plus");
let rez = 0

let spanRes = document.getElementById("res");
btnPlus.addEventListener("click",()=>{
    rez ++;
    console.log(rez);
    spanRes.innerHTML = rez;
    if(rez > 0){
        spanRes.style.color = "green";
    }
    else{
        spanRes.style.color = "red";
    }
});

let btnMinus = document.getElementById('minus')

btnMinus.addEventListener("click", ()=>{
    rez --;
    spanRes.innerHTML = rez;
    if(rez < 0){
        spanRes.style.color = "red";
    }
    else{
        spanRes.style.color = "green";
    }
});
/////////////////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener('click',()=>{
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

/////////////////////

// DOM

let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnposalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnposalji.addEventListener("click", (e) => {
    e.preventDefault();
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);
    // console.log(typeof(inputGodinaRodjenjaValue));
});

