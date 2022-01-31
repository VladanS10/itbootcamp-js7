// // db je objekat baze  (njega vucemo iz html fajla)
// console.log(db);

// // pristupanje kolekcije
// let customers = db.collection('customers')
// console.log(customers);

// // pristupanje dokumentu
// // 1. nacin
// let doc1 = customers.doc('vstojic')
// console.log(doc1);

// let doc2 = db.collection('tasks').doc('promisi')
// console.log(doc2);

// /*
// Za pristup dokumentu:
// let doc = db.collection("...").doc("...")
// Kod dokumenata imamo sledece operacije:
//     CRUD (Create, Read, Update, Delete)
//     Create: doc.set(...) 
//     Read: doc.get(...)
//     Update: doc.update(...)
//     Delete: doc.delete(...)
// Sve ove 4 operacije kao rezultat vracaju PROMISE
// Sto znaci: nakon njih lancamo .then() i .catch()
// */

// let obj = {
//     name: "Laza",
//     age: 25,
//     addresses: ["Nis", "Vranje"],
//     salary: 412.25
// };

// // db.collection('customers').doc('bpera').set({ height: 185})
// // db.collection('customers').doc('blaza').set(obj)
// db.collection('customers').doc('vstojic').set({ height: 185})

// .then(() =>{

//     return db.collection('customers').doc('blaza').set(
//         { height: 185} ,
//         { merge: true }
//         )
//     })
// .then(() =>{
//     console.log("Spojen dokument u  kolekciju customers", obj);
// })
// .catch((err)=>{
//     console.error("Doslo je do greske" + err);
// });

// let datum1 = new Date("2022-01-26 12:00:00");
// let datum2 = new Date("2022-01-26 13:00:00");

// let obj2 = {
//     title: "Fudbal",
//     start_date: firebase.firestore.Timestamp.fromDate(datum1),
//     due_date: firebase.firestore.Timestamp.fromDate(datum2),
//     priority: true,
//     description: "Fudbal sa drugarima iz ITBootcamp-a"
// }

// db.collection('tasks')
// .doc('promisi')
// .set(obj2)
// .then(()=>{
//     console.log(`Uspesno dodat task`);
// })
// .catch(msg =>{
//     console.log(`Neuspesno dodat task: ${msg}`);
// });


// // Update
// db.collection('tasks')
// .doc('promisi')
// .update({
//     priority: false,
//     title: "Kosarka"
// })
// .then(()=>{
//     console.log(`Uspesno promenjeno polje u dokumentu promisi`);
// })
// .catch(err =>{
//     console.log(`Greska prilikom menjanja dokumenta: ${err}`);
// });

// // Delete
// db.collection('customers')
// .doc('bpera')
// .delete()
// .then(() =>{
//     console.log(`Uspesno izbrisan dokument`);
// })
// .catch(err =>{
//     console.log(`Greska pri brisanju ${err}`);
// });

// db.collection('customers')
// .doc('bpera')
// .delete()
// .then(() =>{
//     console.log(`Uspesno izbrisan dokument`);
// })
// .catch(err =>{
//     console.log(`Greska pri brisanju ${err}`);
// });



// ZADATAK MOVIE

let movies = db.collection("movies")

let movie2 = {
    name: "Batman",
    director: "Tim Burton",
    release_year: 2022,
    genres: ["Action","Crime", "Drama"],
    rating: 7.5
}
let movie3 = {
    name: "Spiderman",
    director: "Jon Watts",
    release_year: 2019,
    genres: ["Action","Crime", "Comedy"],
    rating: 7.4
}

// Dodaje filmove

db.collection("movies")
.doc("movie2")
.set(movie2)
.then(()=>{
    console.log(`Uspesno unet obj movie 2`);
})
.catch(err =>{
    console.log(`Nije unet obj movie 2`, err);
});

db.collection("movies")
.doc("movie3")
.set(movie3)
.then(()=>{
    console.log(`Uspesno unet obj movie 3`);
})
.catch(err =>{
    console.log(`Nije unet obj movie 3`, err);
});

/// Menja podatke u bazi

db.collection("movies")
.doc("movie3")
.update({
    rating: 7.3
})
.then(()=>{
    console.log(`Uspesno promenjen rating obj movie 3`);

})
.catch(err =>{
    console.log(`Nije promenjen rating obj movie 3`, err);
});


// Dodaje zanr nekom filmu
db.collection("movies")
.doc("movie3")
.update({
    genres: firebase.firestore.FieldValue.arrayUnion("Mistery")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})

// Brisanje zanr
db.collection("movies")
.doc("movie3")
.update({
    genres: firebase.firestore.FieldValue.arrayRemove("Action")
})
.then(()=>{
    console.log(`Uspesno dodat zanr u obj movie 3`);
})
.catch(err =>{
    console.log(`Nije uspelo dodavanj u obj movie 3`, err);
})


// Menja ime i prezime

db.collection("movies")
.doc("movie3")
.update({
    director: "Vladan Stojic"
})
.then(()=>{
    console.log(`Uspesno promenjen ime obj movie 3`);
})
.catch(err =>{
    console.log(`Nije promenjen imeobj movie 3`, err);
})


/// Drugi nacin za dodavanje dokumenta

db.collection('tasks')
.add({
    title: "Vezba za projekat",
    description: "Vezbanje JS",
    start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    due_date: null,
    priority: true
})
.then(()=>{
    console.log('Uspesno dodat zadatak u kolekciju tasks');
})
.catch(err =>{
    console.log(`Desila se greska: ${err}`);
});

/*
db.collection("...").add() <=> db.collection("...").doc().set()
- dodaje novi dokument sa random generisanim ID-em

db.collection("...").doc(id).set()
- dodaje novi dokument sa zadatim ID-em
*/
