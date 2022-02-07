import Chatroom from "./chat.js";
import ChatUl from "./ui.js";

// DOM
let Ul_lista = document.querySelector('ul')
let sendMessage = document.getElementById("sendMessage")
let inputMessage = document.getElementById("inputMessage")

let updateMessage = document.getElementById("updateMessage")
let inputUsername = document.getElementById("inputUsername")

let changeColor = document.getElementById('changeColor')
let btnColor = document.getElementById('btnColor')

let ulList = document.getElementById('unList')

let navBar = document.querySelector('nav')


// Objekti klasa / Instance klasa
let newUsername = "Anonymus";
if(localStorage.lsUsername){
    newUsername = localStorage.lsUsername
}
let chat = new Chatroom("general", newUsername)
let chatUl = new ChatUl(Ul_lista)

// Ispis dokumenata iz db na stranici
chat.getChats(data =>{
    chatUl.templateLi(data)
})

// let chat1 = new Chatroom('general', "Test1")


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
let promenaImena = document.getElementById('changeUsername')
    updateMessage.addEventListener("submit", (e) =>{
    e.preventDefault();
    let newUser = inputUsername.value;
    chat.updateUsername(newUser);
    let li = document.querySelectorAll('li')
    li.forEach(el =>{
        el.classList.remove('right')
        if(newUser === el.firstChild.innerHTML){
            el.classList.add('right')
        }
        else{
            el.classList.add('left')
        }
    });
    
    chat.updateUsername(newUser)
    if(chat.validate_user(newUser)){
        let par = document.createElement('p')
        par.innerHTML = newUser.trim();
        // par.style.color = "blue";
        promenaImena.appendChild(par);
        promenaImena.classList.toggle("show")
        setTimeout(function(){
            promenaImena.classList.toggle("show")
            par.remove();
        }, 3000);
        
    }
    updateMessage.reset();
})




navBar.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.tagName == "BUTTON"){
        console.log(e.target.id);
        chatUl.clear();
        chat.updateRoom(e.target.id)
        chat.getChats(data =>{
            chatUl.templateLi(data)
        })
    }
})
// let timer = null

btnColor.addEventListener('click', e=>{
    e.preventDefault()
    let color = changeColor.value
    console.log(color);
    setTimeout(() =>{
        ulList.style.backgroundColor = color
    }, 500)
    localStorage.setItem('color', color)
    
})
ulList.style.backgroundColor = localStorage.color

ulList.addEventListener('click', e =>{
    e.preventDefault()
    if(e.target.tagName == "I"){
        confirm("Da li ste sigurni da zelite da obrisete ovu poruku?")
        e.target.parentElement.remove();
        chat.deleteMsg(e.target.parentElement.id);
        // chat.chat.doc(e.target.parentElement.id).delete();
    }
})

let btnUpdateDate = document.getElementById("updateDate")
    btnUpdateDate.addEventListener('click', e =>{
    e.preventDefault()
    chatUl.clear()
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let dateTime1 = new Date(Date.parse(startDate))
    let dateTime2 = new Date(Date.parse(endDate))

    chat.filterDate((data) =>{
        chatUl.templateLi(data)
    },dateTime1, dateTime2)
})
