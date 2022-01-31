let getTodos = (resource, callback) => {
    let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState == 4 && request.status == 200){
        // Sve je OK
        // console.log(request.responseText);
        callback(request.responseText, undefined);
        // let data = JSON.parse(request.responseText)
    }
    else if(request.readyState == 4){
        // Nesto nije OK
        // console.log("Ne mogu da dohvatim podatke");
        callback(undefined, "Ne mogu da dohvatim podatke");
    }
});

// 2. Otvaranje kreiranog zahteva
request.open('GET', resource);

// 3. Saljemo zahtev
request.send();
}

getTodos('../JSON/todos.json', (data, err) => {
    console.log('Callback okinuta');
    // Ako je err == true, ispisati tu gresku
    if(err){
        console.log(err);// Ispisuje gresku
    }
    else{
        console.log(data);// Ispisuje podatke sa kojima moze dalje da raspolaze
        
    }
});


console.log("KRAJ");

