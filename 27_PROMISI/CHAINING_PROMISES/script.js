let getTodos = resource => {
    // 1. 
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Saljemo zahtev
    request.send();

        let p = new Promise((resolve, reject)=>{
            request.addEventListener('readystatechange', () => {
                if(request.readyState == 4 && request.status == 200){
                    // Sve je OK
                    // console.log(request.responseText);
                    // callback(request.responseText, undefined);
                    // let data = JSON.parse(request.responseText)
                    resolve(request.responseText);
                }
                else if(request.readyState == 4){
                    // Nesto nije OK
                    // console.log("Ne mogu da dohvatim podatke");
                    // callback(undefined, "Ne mogu da dohvatim podatke");
                    reject("Ne mogu da dohvatim podatke");
                }
            });
        });
        return p; // Vracam objekat Promise
}

// 1. da se ucita todos.json fajl, 
// 2. da se ucita fruits.json fajl, 
// 3. da se ucita vegetables.json fajl

getTodos("../JSON/todos.json").then(data =>{
    console.log("Promise todos resolved", data);
    return getTodos("../JSON/fruits.json"); // Vracam Promise na koji se odnosi naredni .then
}).then(data =>{
    console.log("Promise fruits resolved", data);
    return getTodos("../JSON/vegetables.json");
}).then(data =>{
    console.log("Promise vegetables resolved", data);
}).catch(err =>{
    console.log("Promise todos rejected", err);
});

console.log("KRAJ");

