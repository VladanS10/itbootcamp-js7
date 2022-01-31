// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', ()=>{
//     if(request.readyState === 1){
//         console.log("Uspostavljena konekcija");
//     }
//     else if(request.readyState === 2){
//         console.log("Poslat je zahtev serveru");
//     }
//     else if(request.readyState === 3){
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
//     }
//     else if(request.readyState === 4){
//         console.log("Odgovor je preuzet:", request.responseText);
//     }
// });

// 2.Zadatak
// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//         data.forEach(el =>{
//             if(el.website.includes(".com")){
//                 console.log(el.name);
//             }
//         })
//     }
//     else if(this.readyState === 4){
//         console.log('could not fetch data');
//         console.log(this.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();


// 3. Zadatak
// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//         data.forEach(el =>{
//             if(el.name.includes("Clementin")){
//                 console.log(el.name);
//             }
//         })
//     }
//     else if(this.readyState === 4){
//         console.log('could not fetch data');
//         console.log(this.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();

 // 4.Zadatak
//  let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//         data.forEach(el =>{
//             if(el.company.name.includes("Group") || el.company.name.includes("LLC")){
//                 console.log(el.name);
//             }
//         })
//     }
//     else if(this.readyState === 4){
//         console.log('could not fetch data');
//         console.log(this.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();


// 5.Zadatak
// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//         let niz = [];
//         data.forEach((el) => {
//             if(niz.includes(el.address.city)) {
//             } 
//             else {
//              niz.push(el.address.city);
//             }
//     });
//     console.log(niz);
//   } 
//     }
//     // else if(this.readyState === 4){
//     //     console.log('could not fetch data');
//     //     console.log(this.responseText);
//     // }
// );

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();

// 6. Zadatak
// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//         let br = 0;
//         data.forEach(el =>{
//            if(parseFloat(el.address.geo.lat) < 0 && parseFloat(el.address.geo.lng) < 0){
//                 br++
//                 console.log(br, el.name);
//             }   
//         }) 
//     }
//     else if(this.readyState === 4){
//         console.log('could not fetch data');
//         console.log(this.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();


// let getUsers =(resolve, reject) =>{
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function(){
//     if(this.readyState === 4 && this.status === 200){
//         // radi nesto kada je sve u redu
//         let data = JSON.parse(this.responseText)
//         resolve(data);
//     }
//     else if(this.readyState === 4){
//         // radi nesto kada je doslo do greske
//         reject("Doslo je do greske!")
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();
// }

// let zad2 = (arr)=>{
//     arr.forEach(el =>{
//         if(el.website.includes(".com")){
//             console.log(el.name);
//         }
//     })
// }

// let zad3 = (arr) =>{
//     arr.forEach(el =>{
//         if(el.name.includes("Clementin")){
//             console.log(el.name);
//         }
//     })
// }
// let zad4 = (arr) =>{
//     arr.forEach(el =>{
//         if(el.company.name.includes("Group") || el.company.name.includes("LLC")){
//             console.log(el.name);
//         }
//     });
// }
// let zad5 = (arr) =>{
//     let gradovi = [];
//     arr.forEach(el =>{
//         if(!gradovi.includes(el.address.city) ){
//             gradovi.push(el.address.city)
//         }
//     });
//     console.log(gradovi);
// }

// let ispisPorukeStranica = (poruka) =>{
//     document.body.innerHTML += `<p class='error'>${poruka}</p>`
// }
// let ispisPorukeKonzola = (poruka) =>{
//     console.log(poruka);
// }

// getUsers(zad2, ispisPorukeKonzola);
// getUsers(zad3, ispisPorukeStranica);
// getUsers(zad4, ispisPorukeKonzola);
// getUsers(zad5, ispisPorukeStranica);

// getUsers(
//     (arr)=>{
//         arr.forEach(el =>{
//             if(el.company.name.includes('Group') || el.company.name.includes('LLC')){
//                 console.log(el.name);
//             }
//         });
//     }, 
//     (poruka)=>{
//         document.body.innerHTML += `<p class="error">${poruka}</p>`
//     }
//     )

let sportisti = (resolve, reject) =>{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(){
            if(this.readyState === 4 && this.status === 200){
                // radi nesto kada je sve u redu
                let data = JSON.parse(this.responseText)
                resolve(data);
            }
            else if(this.readyState === 4){
                // radi nesto kada je doslo do greske
                reject("Doslo je do greske!")
            }
        });
        request.open('GET', 'sportisti.json');
        request.send();
}

let prosecnaVisina = arr =>{
    let visina = 0;
    let prVisina;
    arr.forEach(el =>{
        visina += el.visina;
    })
    prVisina = visina / arr.length
    console.log(prVisina);
    
}

// console.log(sportisti(prosecnaVisina));
sportisti(prosecnaVisina);


let najmanjeTransfera = arr =>{
    let min = arr[0].timovi.length;
    arr.forEach(el =>{
        if(min > el.timovi.length){
            min = el.timovi.length;
        }
    });
    arr.forEach(i =>{
        if(min == i.timovi.length){
            console.log(`${i.imePrezime}`);
        }
    })
}

sportisti(najmanjeTransfera)

let igraliZaLejkerse = arr =>{
    arr.forEach(el =>{
        if(el.timovi.includes("Lakers")){
            console.log(el.imePrezime);
        }
    })
}
sportisti(igraliZaLejkerse)