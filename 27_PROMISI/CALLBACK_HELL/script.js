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
        console.log(err);// Ispisuje gresku ako je doslo do greske u todos.json fajlu
    }
    else{
        console.log(data);// Ispisuje podatke iz todos.json, 
        // Nakon sto su se ispisali podaci iz todos.json, pozivamo sledeci fajl fruits.json
        getTodos('../JSON/fruits.json', (data, err) =>{

            if(err){
                console.log(err); // Ispisuje gresku ako je doslo do greske u fruits.json fajlu
            }
            else{
                console.log(data);// Ispisuje podatke iz fruits.json fajla
                // Nakon sto je ucitao prethodni fajl fruits.json, pozivamo sledeci fajl vegetables.json
                getTodos('../JSON/vegetables.json', (data, err) =>{
                    if(err){
                        console.log(err);// Ispisuje gresku ako je doslo do greske u vegetables.json fajlu
                    }
                    else{
                        console.log(data);// Ispisuje podatke iz vegetables.json fajla
                    }
                })
            }
        });
    }
});


console.log("KRAJ");

