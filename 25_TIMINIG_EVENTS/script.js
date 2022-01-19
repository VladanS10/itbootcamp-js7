// console.log(1);
// console.log(2);



// setTimeout(() =>{
//     console.log(3);
// }, 1000 * 4);

// let btnPrikaz = document.getElementById('btn1');
// let btnPrekid = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3')
// let btn4 = document.getElementById('btn4')
// let div = document.getElementById('result');
// let ispis = document.getElementById('ispis')
// let timer = null;
// let clock = null;

// btnPrikaz.addEventListener('click', function() {
//     let datum = new Date();
//     let sati = datum.getHours();
//     let minuti = datum.getMinutes();
//     let sekunde = datum.getSeconds();
//     if(timer === null){

//         timer = setTimeout(()=>{
//             div.innerHTML = `${sati}:${minuti}: ${sekunde}`;
//             timer = null;
//         }, 2000)
//     }
// });

// btnPrekid.addEventListener('click', function() {
//     clearTimeout(timer);
//     timer = null;
// })



// btn3.addEventListener('click', function(){
//     if(clock === null){

//         clock = setInterval(() => {
//             let datum = new Date();
//             let sati = datum.getHours();
//             let minuti = datum.getMinutes();
//             let sekunde = datum.getSeconds(); 
//             ispis.innerHTML = `${sati}:${minuti}: ${sekunde}`;
//         }, 1000 /10);
//     }
// })

// btn4.addEventListener('click', function(){
//     clearInterval(clock)
//     clock = null
// });

let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let odbrojavati = document.getElementById('broj');
let ispis = document.getElementById('results')
let clock = null

// odbrojavati.value = "Test";

btnStart.addEventListener('click', function(){
    clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds(); 
            odbrojavati.value = `${sekunde}`;
            ispis.innerHTML = `${sati}:${minuti}: ${sekunde}`;
        }, 1000 /10);
    if(clock === null){
        clock = setInterval(() => {
            let datum = new Date();
            let sekunde = datum.getSeconds(); 
            odbrojavati.value = `${sekunde}`;
            ispis.innerHTML = `${sati}:${minuti}: ${sekunde}`;
        }, 1000);
    }
    
})
console.log(btnStart);
console.log(odbrojavati);


btnStop.addEventListener('click', function(){
    console.log(2);
    clearInterval(clock)
    clock = null
})
console.log(btnStop);















// function ispis(){
//     console.log(3);
// }
// setTimeout(ispis, 1000 * 2);

// setTimeout(function(){
//     console.log(3);
// }, 1000 * 2)
