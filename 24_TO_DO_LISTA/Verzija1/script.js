
let liToDo = document.querySelectorAll('li')

console.log(liToDo);

liToDo.forEach(el =>{
    el.addEventListener('click', ()=>{

        // 1. Nacin
        // if(el.style.textDecoration == "line-through"){
        //     el.style.textDecoration = 'none'
        // }
        // else{
        //     el.style.textDecoration = 'line-through'
        // }

        // 2. Nacin
        el.classList.toggle('lineThrough')
    })
})


