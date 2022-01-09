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

let arrBlogs = [blog1, blog2, blog3];

// Ispis objekata iz niza FOREACH petlje
arrBlogs.forEach(objekatBlog =>{
    console.log(objekatBlog);
});
arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

// Ispis objekata iz niza pomocu FOR petlje
for(let i = 0; i < arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
}

// Promena vrednosti elekemnta
// blog3.title = "Napredni HTML tagovi";
// console.log(blog3.title);

// arrBlogs[2].title = "HTML 5 tagovi";
// console.log(arrBlogs[2].title);

// VEZBANJE

// 1.Zadatak
// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova

// let sumLikes = arr =>{
//     let sum = 0;

//     // Prvi nacin
//     // arr.forEach(blog =>{
//     //     sum += blog.likes;
//     // });

//     // Drugi nacin
//     for(let i = 0; i < arr.length; i++){
//         // arr[i] je objekat
//         // arr[i].liker je broj lajkova objetka arr[i]
//         sum += arr[i].likes;
//     }
//     return sum;
// }

// console.log(`Ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

// // Lakovi iz 1 i 3 bloga

// let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
// console.log(sum13);

// 2. Zadatak
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosecanBrojLajkova = arr =>{
    let suma = 0;
    let b = 0;
    arr.forEach(e =>{
        suma += e.likes;
        b++
    })
    let prosek = suma / b;
    return prosek;
}
console.log(prosecanBrojLajkova(arrBlogs));


// 3. Zadatak

// Naraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju vise pozitivnih nego negativnih ocena
// let moreLikes = arr =>{
//     arr.forEach(elem =>{
//         if(elem.likes > elem.dislikes){
//             console.log(elem.title);
//         }
//     });
// }
// console.log("Blogovi sa vise lajkova nego dislajkova");
// moreLikes(arrBlogs)


// 4. Zadatak
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

    let ispis = arr =>{
        arr.forEach(e =>{
            if(e.likes > e.dislikes * 2){
                console.log(e.title);
            }
        });
    }

    ispis(arrBlogs);



// 5. Zadatak
// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let ispisNaslova = arr => {
    arr.forEach(e =>{
        if(e.title[e.title.length - 1]  === "!"){
            console.log(e.title);
        }
    });
}
ispisNaslova(arrBlogs)