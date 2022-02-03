import Chatroom from "./chat.js";
import ChatUl from "./ui.js";

// DOM
let Ul_lista = document.querySelector('ul')
let sendMessage = document.getElementById("sendMessage")
let inputMessage = document.getElementById("inputMessage")

let updateMessage = document.getElementById("updateMessage")
let inputUsername = document.getElementById("inputUsername")


// Objekti klasa / Instance klasa
let chat = new Chatroom("#general", "Vladan")
let chatUl = new ChatUl(Ul_lista)


// Ispis dokumenata iz db na stranici
chat.getChats(data =>{
    chatUl.templateLi(data)
})



sendMessage.addEventListener("submit", (e)=>{
    e.preventDefault()
    let ispisPoruke = inputMessage.value;
    chat.addChat(ispisPoruke)
    .then(()=>{
        sendMessage.reset()
    })
    .catch(err =>{
        console.log(`Greska ${err}`);
    })
})

updateMessage.addEventListener("submit", (e) =>{
    e.preventDefault();
    let newUser = inputUsername.value;
    chat.updateUsername(newUser);
    updateMessage.reset();
})

