let blog1 = {
    title: "Osnovni HTML tagovi!",
    likes: 25,
    dislikes: 15,
};
let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 15,
    dislikes: 2,
};
let blog3 = {
    title: "Napredni CSS selektori!",
    likes: 55,
    dislikes: 75,
};
let blog4 = {
    title: "Uvod u JS!",
    likes: 150,
    dislikes: 50,
};
let blog5 = {
    title: "IF naredba grananja!",
    likes: 250,
    dislikes: 160,
};

let user1 = {
    username: "Vladan Stojic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes: function(){
        let s = 0;
        this.blogs.forEach(b =>{
            s += b.likes;
        });
        return s;
    }
};
let user2 = {
    username: "Stefan Stanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function(){
        let s = 0;
        this.blogs.forEach(b =>{
            s += b.likes;
        });
        return s;
    }
};
//Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

//Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

// Niz korisnika

let users = [user1, user2];

// Ko su autori blogova
users.forEach(u =>{
    console.log(u.username);
});

// Ispisati sve naslove blogove koje su napisali autori iz niza users

users.forEach(u => {
    // U je jadan user iz niza
    let blogsU = u.blogs; // Svi blogovi tekuceg korisnika U
    blogsU.forEach(b =>{
        console.log(b.title);
    });
});


// 2. Zadatak
console.log("Ispisati imena onih autora koji imaju ispod 30 godina");
users.forEach(u =>{
    if(u.age < 30) {
        console.log(u.username);
    }
});

// 3. Zadatak
console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova");

users.forEach(u =>{
    let blogU = u.blogs; // niz blogova tekuceg korisnika U
    blogU.forEach(b =>{
        if(b.likes > 50){
            console.log(b.title);
        }
    });
});
// 4. ZADATAK
console.log("Ispisati sve blogove autora čiji je username ’Vladan Stojic’");

users.forEach(u =>{
    if(u.username === "Vladan Stojic"){
        let blogU = u.blogs;
        blogU.forEach(e=>{
            console.log(e.title);
        });
    }
});

users.forEach(u=>{
    let blogU = u.blogs;
    if(u.username === "Vladan Stojic"){
        blogU.forEach(e=>{
            console.log(e);
        });
    }
});


// 5. Zadatak
console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali");

// PRVI NACIN

users.forEach(u =>{
    let sumaLajkovaU = 0; // suma lajkova jednog user-a
    // Krecem se od bloga do bloga korisnika U
    u.blogs.forEach(b =>{
        sumaLajkovaU += b.likes;
    });
    if(sumaLajkovaU> 200){
        console.log(u.username);
    }
    // console.log(sumaLajkovaU);
});

// DRUGI NACIN
users.forEach(u =>{
    if(u.myLikes() > 200){
        console.log(u.username);
    }
});

console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena");

let globalAvgLikes = arr =>{
    let globalSum = 0; // Suma svih lajkova svih korisnika
    let globalBr = 0; // Broj blogova svih korisnika
    arr.forEach(u =>{
        globalSum += u.myLikes();// Dodaj kojliko je pojedinacni korisnik imao ukupno lajkova za sve svoje blogove
        globalBr += u.blogs.length;// Dodaj kojliko je pojedinacni korisnik imao blogova
    });
    return globalSum / globalBr;
}

console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = arr =>{
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u =>{
        u.blogs.forEach(b =>{
            if(b.likes > globalAvg){
                console.log(b.title);
            }
        });
    });
}
console.log(`Ispis naslova sa natprosecnim brojem lajkova`);
blogoviSaNatprosecnoLajkova(users);