import {Film} from "./film.js"

let film1 = new Film ("Ko to tamo peva", "Sijan Slobodan", 1980, [8.2, 9.3, 10,9])
let film2 = new Film ("Kengur", "Radivoje Antic", 2000, [10, 9, 10, 10])
let film3 = new Film ("Toma Zdravkovic","Dragan Bjelogrlic", 1970, [7, 6, 6, 7, 8, 10])


film1.stampaj();
film2.stampaj();
film3.stampaj();

// Testiram da li moj seter radi
film1.naslov = "Maratonci trce pocasni krug"
film1.stampaj();
console.log(film1);
console.log(film2);
console.log(film3);

// Testiram da li moji geter radi
console.log(film1.naslov);
console.log(film1.reziser);
console.log(film1.godinaIzdanja);

// film1.dodajOcenu(10);
film1.stampaj();


let tabelica = 
`
<table border = 1>
    <tr>
        <th>Naziv filma:</th>
        <th>Reziser:</th>
        <th>Godina izdanja:</th>
        <th>Ocene:</th>
        <th>Prosek:</th>
    </tr>
`;

let filmovi = [film1, film2, film3]
filmovi.forEach(el =>{
    tabelica += `
    <tr>
        <td>${el.naslov}</td>
        <td>${el.reziser}</td>
        <td>${el.godinaIzdanja}</td>
        <td>${el.ocene}</td>
        <td>${el.prosek()}</td>
    </tr>
    `
})
tabelica +=`</table>`;
document.body.innerHTML += tabelica;

console.log(film1.ocene);
film1.prosek()
console.log(film1.prosek());
console.log(film2.prosek());
console.log(film3.prosek());




let vekFilmova = (arr, vek) =>{
    let pocetnaGod = vek * 100 - 99;
    let krajnaGod = vek * 100;
    arr.forEach(el =>{
        if(el.godinaIzdanja <= krajnaGod && el.godinaIzdanja >= pocetnaGod){
            console.log(el.naslov);
        }
    });
}
vekFilmova(filmovi, 20);



let prosecnaOcena = arr =>{
    let ukOcena = 0
    let srUkupnaOcena;
    arr.forEach(el =>{
        el.ocene.forEach(o =>{
            ukOcena += o
            srUkupnaOcena = ukOcena / el.ocene.length
        })
    });
    console.log(srUkupnaOcena);
    
}

prosecnaOcena(filmovi)


let najboljeOcenjeni = arr =>{
    let najOcena = arr[0].prosek()
    for(let i = 1; i<arr.length; i++){
        if(najOcena < arr[i].prosek()){
            najOcena = arr[i].prosek()
        }
    }
    return najOcena
}
console.log(najboljeOcenjeni(filmovi));
najboljeOcenjeni(filmovi)

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.


let osrednjiFilm = arr =>{
    let globalniProsek = prosecnaOcena(arr);
    let filmNajbliziProseku = arr[0] // Pretpostavka da je prvi film najblizi proseku
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - filmNajbliziProseku.prosek());
    arr.forEach(f =>{
        let prosecnaOcenaFilma = f.prosek();
        if(Math.abs(globalniProsek - prosecnaOcenaFilma) < najmanjaRazlikaOdProseka){
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosecnaOcenaFilma);
            filmNajbliziProseku = f;
        }
    });
    return filmNajbliziProseku;
}

osrednjiFilm(filmovi).stampaj()
console.log(osrednjiFilm(filmovi));




//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najFilm = arr =>{
    let najOcena = arr[0].prosek()
    let naj = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(najOcena < arr[i].prosek()){
            najOcena = arr[i].prosek()
            naj = arr[i];
        }
    }
    return naj;
}
let najmanjaOcenaNajboljeg = arr =>{
    let najboljiFilm = najFilm(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach(o =>{
        if(o < najslabijaOcena){
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi)


// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = arr =>{
    let malaOcena = arr[0].ocene[0];
    arr.forEach(o =>{
        o.ocene.forEach(el =>{
            if(el < malaOcena){
                malaOcena = el
            }
        })
    });
    console.log(malaOcena);
}
najmanjaOcena(filmovi)

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 


let sveOcene = arr =>{
    let arrSveOcene = [];
    arr.forEach(f =>{
        arrSveOcene = arrSveOcene.concat(f.ocene);
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));




let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // Sigurno se jednom pojavio
    for(let i = 0; i < arr.length; i++) {
        let tekuci = arr[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;
        for(let j = 0; j < arr.length; j++) {
            if(tekuci == arr[j]) {
                // naišli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }
        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
}
let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (o, arr) =>{
    let nizFilmova = [];
     arr.forEach(f =>{
        if(f.prosek() > o){
            // console.log(f);
            nizFilmova.push(f);
        }
     });
     return nizFilmova;
}

console.log(iznadOcene(7.4, filmovi));
// iznadOcene(7.4, filmovi)


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

// let najSkorijiFilm = arr =>{
//     let najnoviji = arr[0].godinaIzdanja
//     arr.forEach(el =>{
//         if(el.godinaIzdanja > najnoviji){
//             najnoviji = el.godinaIzdanja
//         }
//     });
//     return najnoviji
// }

// console.log(najSkorijiFilm(filmovi));
// najSkorijiFilm(filmovi)

let iznadOceneNoviji = (o, arr) =>{
    let nizFilmova = iznadOcene(o, arr);
    let noviNiz = nizFilmova[0];
    nizFilmova.forEach(el =>{
        if(noviNiz > el.godinaIzdanja){
            noviNiz = el
        }
    })
    console.log(noviNiz);
}

iznadOceneNoviji(7, filmovi)