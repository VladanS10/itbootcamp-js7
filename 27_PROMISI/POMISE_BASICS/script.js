let getSomething = () =>{
    let obj = new Promise((resolve, reject) =>{
       resolve("Nesto resolve"); // Sve je OK proslo
       reject("Nesto reject"); // Nesto nije OK proslo
    });
    // console.log(obj);
    return obj // Vraca Promise objekat
}

// Ako je Promise vratio resolve, realizuje se .then() grana
// Ako je Promise vratio reject, realizuje se .catch() grana
getSomething().then(data =>{
    console.log(`Aktivirana je .then() grana ${data}`);
}).catch(err =>{
    console.log(`Aktivirana je .catch() grana ${err}`);
});