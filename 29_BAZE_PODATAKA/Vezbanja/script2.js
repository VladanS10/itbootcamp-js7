// // 1. Pristupanje konkretnom dokumentu u kolekciji
// // 2. Pristupanje svim ili odredjenim dokumentima iz kolekcije


// // 1) 
// db.collection('customers')
// .doc('blaza')
// .get()
// .then((doc)=>{
//     if(doc.exists){
//         console.log(`Postoji dokument ${doc.id}`);
//         let obj = doc.data();
//         console.log(obj);
//     }
//     else{
//         console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
//     }

//     // Polja: doc.id (string), doc.exists (boolean)
//     // Metoda: doc.data()
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokument ${err}`);
// });

// // 2)
// db.collection('customers')
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(el =>{
//             console.log(el.id, el.data());
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// // 1. Dohvatanje dokumenata u odredjenom redosledu
// // 2. Dohvatanje odredjenog broja dokumenata
// // 3. Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)

// // 1)
//     db.collection('customers')
//     .orderBy("age", "desc")
//     .orderBy("name")
//     .get()
//     .then(snapshot =>{
//         if(!snapshot.empty){
//             let allDocs = snapshot.docs;
//             allDocs.forEach(doc =>{
//                 let obj = doc.data();
//                 console.log(obj.name + " " + obj.age + " " + obj.salary);
//             })
//         }
//         else{
//             console.log(`Nema dokumenata u kolekciji`);
//         }
//     })
//     .catch(err =>{
//         console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
//     });

// // 2)
// db.collection('customers')
// .orderBy("name")
// .orderBy("age", "desc")
// .orderBy("salary", "desc")
// .limit(1)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// // 3)
// db.collection('customers')
// .where("age", ">=", 25)
// // .orderBy("age", "desc")
// // .orderBy("name")
// // .limit(1)
// // .orderBy("age", "desc")
// // .orderBy("salary", "desc")
// // .limit(1)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });


/// ZADACI
// 1.
// db.collection('customers')
// .orderBy("name")
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 2.
// db.collection('customers')
// .where("addresses", "array-contains", "Nis")
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 3.
// db.collection('customers')
// .where("salary", ">=", 500)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 4.
// db.collection('customers')
// .where("salary", ">=", 300)
// .where("salary", "<=", 800)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 5.
// db.collection('customers')
// .where("salary", "<", 900)
// .where("age", "==", 30)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 6.
// db.collection('customers')
// .where("addresses", "array-contains-any", ["Beograd", "Nis"])

// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });


// 7.
// db.collection('customers')
// .where("age", "in", [22, 25, 28])
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });


// TASKOVI

// 1.
// db.collection('tasks')
// .orderBy("title", "asc")
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.title);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 2.
// db.collection('tasks')
// .where("priority", "==", true)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.title);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 3.
// let now = new Date();
// let year = now.getFullYear();
// let date1 = new Date(year, 0, 1);
// let date2 = new Date(year + 1, 0, 1);
// let date1Timestmp = firebase.firestore.Timestamp.fromDate(date1)
// let date2Timestmp = firebase.firestore.Timestamp.fromDate(date2)
// console.log(date1);
// let nowTimestamp = firebase.firestore.Timestamp.fromDate(now)

// db.collection('tasks')

// .where("due_date", ">=", date1Timestmp)
// .where("due_date", "<", date2Timestmp)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             document.body.innerHTML += `${obj.title} <br>`
//             console.log(obj);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 4.
// db.collection('tasks')
// .where("due_date", "<=", nowTimestamp)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.title);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

// 5.
// db.collection('tasks')
// .where("start_date", ">", nowTimestamp)
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj.title);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });


// MOVIES


// 1.
// db.collection('movies')
// .get()
// .then(snapshot =>{
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc =>{
//             let obj = doc.data();
//             console.log(obj);
//         })
//     }
//     else{
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch(err =>{
//     console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
// });

  // 2. 
db.collection('movies')
.where("director.name", "==", "Frank")
.where("director.surname", "==", "Darabont")
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj.name);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});


// 3.
db.collection('movies')
.where("rating", ">=", 7)
.where("rating", "<=", 9)
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj.name);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});

// 4.
db.collection('movies')
.where("genres", "array-contains-any", ["Action", "Comedy", "Triler"])
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj.name);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});

// 5.
db.collection('movies')
.where("release_year", ">", 2000)
.get()
.then(snapshot =>{
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj.name);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});

// 6.
db.collection('movies')
.orderBy("rating", "desc")
.limit(1)
.get()
.then(snapshot =>{
    
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});


// 7. 
db.collection('movies')
.orderBy("rating", "asc")
.limit(1)
.get()
.then(snapshot =>{
    
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc =>{
            let obj = doc.data();
            console.log(obj);
        })
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err =>{
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});