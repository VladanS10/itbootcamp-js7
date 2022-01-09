// // console.log(document);
// // console.log(typeof document);

// // console.log(document.body);
// // console.log(typeof document.body);

// // let p1 = document.getElementById('p1');
// // console.log(p1);
// // console.log(typeof p1);


// // let cont = document.getElementsByClassName("container");
// // console.log(cont);
// // console.log(typeof cont);

// // for(let i = 0; i < cont.length; i++){
// //     console.log(cont[i]);
// // }

// // let contNiz = Array.from(cont);

// // contNiz.forEach(el =>{
// //     console.log(el);
// // });

// // let paragrafi = document.getElementsByTagName("p");
// // for(let i = 0; i < paragrafi.length; i++){
// //     console.log(paragrafi[i]);
// // }

// // let linkovi = document.getElementsByName("link");
// // for(let i = 0; i < linkovi.length; i++){
// //     console.log(linkovi[i]);
// // }

// // p1 = document.querySelector("#p1");
// // console.log(p1);

// // cont = document.querySelector(".container")
// // console.log(cont);

// // cont = document.querySelectorAll(".container");
// // console.log(cont);

// // for(let i = 0; i < cont.length; i++){
// //     console.log(cont[i]);
// // }
// // cont.forEach(el =>{
// //     console.log(el);
// // });

// // paragrafi = document.querySelectorAll("p")
// // console.log(paragrafi);

// // linkovi = document.querySelectorAll("[name='link']");
// // console.log(linkovi);


// // let divEror = document.querySelector(".error")
// // console.log(divEror);


// // let poslednji = document.querySelector("table tr:last-child");
// // console.log(poslednji);

// // let link = document.querySelectorAll("a");
// // console.log(link);


// // let image = document.querySelectorAll("img");
// // console.log(image);

// // // p1.innerHTML = "Promenjen <span>tekst</span> paragrafa";

// let sviLinkovi = document.querySelectorAll("a");

// sviLinkovi.forEach(link =>{
//     link.href ="https://www.google.com";
//     link.target ="_blank";
//     link.style.color = "black";
//     link.style.backgroundColor = "red";
//     link.style.textDecoration = "none"

//     link.setAttribute = ('name', 'link2')
// });


// // 1. ZADATAK
// let sviParagrafi = document.querySelectorAll("p")
// sviParagrafi.forEach((el, i) =>{
//     el.innerHTML += " VAZNO";
//     // 5.Zadatak
//     el.style.color = "purple"
//     // 6. Zadatak
//     if(i % 2 == 0 ){
//         el.style.backgroundColor = "green" 
//     }
//     else{
        
//         el.style.backgroundColor = "red" 
//     }
// })

// // 2.ZADATAK

// let sviDivovi = document.querySelectorAll("div.error")

// sviDivovi.forEach(el =>{
//     el.innerHTML += "<h1>Greska!</h1>";
// })

// // 3.ZADATAK
// let n = sviParagrafi;
// for(let i = 0; i < sviParagrafi.length; i++){
//     sviParagrafi[i].innerHTML += (i + 1) ** 2 ;
// }


// // 4.Zadatak
// let slike = document.querySelectorAll("img");
// slike.forEach(el =>{
//     el.setAttribute("alt", "Nesto");
// });


// // // 7.Zadatak

// sviLinkovi.forEach((el, i) =>{
//     el.style.padding = "5px";
//     el.style.fontSize = "18px";
//     el.style.textDecoration = "none";

//     if(i % 2 != 0){
//         el.style.backgroundColor = "green"
//         el.style.color = "purple"
//     } 
//     else{
//         el.style.backgroundColor = "blue"
//         el.style.color = "white"
//     }
// });

// // 8. Zadatak
// slike.forEach(el =>{
//     if(el.src. indexOf('.png') > -1 || el.src.indexOf('.PNG')){
//         el.style.border = "2px solid red"; 
//     };
// });

// // 9. Zadatak
// sviLinkovi.forEach(el=>{
//     if(el.target === "_blank"){
//         el.target = "_top";
//     }
//     else {
//         el.target = "_blank";
//     }
// });

// // 11. Zadatak

// let imena = ["Vladan", "Stefan", "Dragan", "Nikola", "Bogdan"];

// imena.forEach(ime => {
//     if(ime.startsWith("S")){
//         document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
//     }
//     else{
//         document.body.innerHTML += `<a href="#">${ime}</a>`
//     }
// });


// // 12. Zadatak
// let lista = "<ul>"
// imena.forEach((el, i) =>{
//     if(i % 2 == 0){
//         lista += `<li style="color: red">${el}</li>`
//     }
//     else{
//         lista += `<li style="color: blue">${el}</li>`
//     }
// });
// lista += "</ul>";
// document.body.innerHTML += lista

// 13. Zadatak


// 1. Zadatak

let paragrafi = document.querySelectorAll("p");

// paragrafi.forEach((el,i) =>{
//     if(i % 2 != 0){
//         el.classList.add("error");
//     }
//     else{
//         el.classList.add("success")
//     }
// });

// paragrafi.forEach((el, i) =>{
//     if(i:nth-child()){
//         el.style.fontSize = "15px"
//     }
//     else if(i % 2 == 0){
//         el.style.fontSize = "25px"
//     }
// });

// console.log(paragrafi);

// paragrafi.forEach(el =>{
//    console.log(el);
//    if(el.textContent.includes('error')){
//        el.classList.add("error")
//    }
//    else{
//        el.classList.add("success")
//    }
// });

// paragrafi.forEach(el =>{
//     if(el.classList)
// });

