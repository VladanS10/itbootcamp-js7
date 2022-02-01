import Chatroom from "./chat.js";
import ChatUl from "./ui.js";


let chat = db.collection('chat')
console.log(chat);

let chat1 = new Chatroom("general", "Pozdrav")
console.log(chat1.username, chat1.room);
// chat1.username = "Stojic"
// console.log(chat1.username);
// chat1.room = "JAVASCRIPT"
// console.log(chat1.room);

// chat1.addChat("ZDRAVO SVIMA")

// console.log(chat1.addChat("Zdravo svima"));

let chat2 = new Chatroom("QA", "JS je bolji od vas")
console.log(chat2);
// chat2.addChat("Posaljite CV")
// .then(()=>{
//     console.log(`Uspesno dodato`);
// })
// .catch(err =>{
//     console.log(`lose ${err}`);
// })

// chat2.getChats(d=>{
//     console.log(d);
// });

chat2.getChats(data =>{
    console.log(data);
})
// console.log(chat2.getChats);

let Ul_lista = document.querySelector('ul')
let chatUl = new ChatUl(Ul_lista)
console.log(chatUl.lista); 

chat2.getChats(data =>{
    console.log(data);
})

chat2.getChats(data =>{
    chatUl.templateLi(data)
})