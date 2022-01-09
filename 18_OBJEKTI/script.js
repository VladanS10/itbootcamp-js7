// console.log(25);

// let blog1 = {
//     title: "HTML",
//     content: "Ovo je blog o osnovnim HTML tagovima",
//     author: "Vladan"
// }
// console.log(blog1);
// console.log(typeof blog1);

// console.log(blog1.title);
// console.log(blog1['title']);

// console.log(blog1.content);
// console.log(blog1['title']);
// console.log(blog1.author);
// console.log(blog1['author']);

// // izmene propertija na dva nacina
// // Prvi nacin
// blog1.title = "Osnove HTML";
// console.log(blog1['title']);

// //Drugi nacin
// blog1["author"] = "Vladan Stojic";
// console.log(blog1['author']);

// ////////////////////////////

// let user = {
//     username: "Vladan Stojic",
//     age: 27,
//     blogs: ["IF naredba grananja", "WHILE petlja", "FOR petlja"],
//     login: function() {
//         console.log("Ulogovani ste");
//     },
//     logout: function(){
//         console.log("Izlogovani ste");
//     },
//     logBlogs: function(){
//         console.log(this);
//         console.log(this.blogs);
//         this.blogs.forEach(e =>{
//             console.log(e);
//         })
//     } 
// };

// console.log(user);
// console.log(user.blogs);
// let nasloviBlogova = user.blogs;

// for(let i = 0; i < nasloviBlogova.length; i++){
//     document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
// }
// for(let i = 0; i < user.blogs.length; i++){
//     document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
// }

//  Poziv METODA
// user.login();
// user.login();
// user.logout();

// Poziv METODA koji u sebi sadrzi poziv nekog propertija
// THIS
// user.logBlogs(user.blogs);
// console.log(this);

let obj = {
    datum: "2021/12/23",
    kisa: false,
    sunce: true,
    oblacno: false,
    temp: [1, 2, 2, 4, 10, 10, 9, 10, 5, 4],
    prosecnaTemperatura: function(){
        let ukupnaTemp = 0;
        let brojMerenja = 0;
        this.temp.forEach(el =>{
            ukupnaTemp += el;
            brojMerenja ++;
        });
        let prosecnaTemp = ukupnaTemp / brojMerenja;
        return prosecnaTemp;
    },
    nadProsecnaTemp: function(){
        let brojNadProsek = 0;
        this.temp.forEach(el =>{
            if(el > this.prosecnaTemperatura()){
                brojNadProsek ++;
            }
        });
        return brojNadProsek;
    },
    maksimalnaTemperatua: function(){
        let max = this.temp[0];
        let brojac = 0;
        this.temp.forEach(el =>{
            if(max < el){
                max = el;
            }
        });
        this.temp.forEach(el =>{
            if(el == max){
                brojac ++;
            }
        });
        return brojac;
    }
}
console.log(obj.prosecnaTemperatura());
console.log(obj.nadProsecnaTemp());
console.log(obj.maksimalnaTemperatua());






// let obj = {
//     datum: "2021/12/23",
//     kisa: false,
//     sunce: true,
//     oblacno: false,
//     temp: [1, 2, 2, 4, -9, 8, -9, -10, 5, 4],

//     leden: function(){

//         // Prvi nacin
//         // for(let i = 0; i < this.temp.length; i++){

//         //     if(this.temp[i] > 0){
//         //         return false;
//         //     }
//         // };
//         //     return true;



//         }
    
// }
// console.log(obj.leden());

// console.log(obj.prTemperatura());
// console.log(obj.nadTemperatura());
