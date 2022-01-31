import Chatroom from "./chat.js";


let chat = db.collection('chat')
console.log(chat);

let chat1 = new Chatroom("general", "Pozdrav")
console.log(chat1.username, chat1.room);
chat1.username = "Stojic"
console.log(chat1.username);
chat1.room = "JAVASCRIPT"
console.log(chat1.room);

let chat2 = new Chatroom("QA", "JS je bolji od vas")
console.log(chat2);