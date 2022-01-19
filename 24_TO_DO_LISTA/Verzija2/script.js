
let inputUnesi = document.getElementById("unesi")
let ulLista = document.querySelector('ul')


inputUnesi.addEventListener("keyup", (e) =>{
    e.preventDefault()
    // console.log(e.key, e.keyCode);
    if(e.keyCode == 13){
        let inputUnesiText = inputUnesi.value
        inputUnesiText = inputUnesiText.trim();
        if(inputUnesiText == "" || inputUnesiText == null){
            alert("Morate da unesete neki tekst")
        }
        else{
            let li = document.createElement('li')
            li.textContent += inputUnesiText
            let radioAdd = document.querySelector('input[name=dodaj]:checked')
            // console.log(radioAdd.id, radioAdd.value);

            if(radioAdd.value == "beggin"){
                ulLista.prepend(li);
            }
            else{
                ulLista.appendChild(li)
            }
    }
        inputUnesi.value = ''
    }

})

ulLista.addEventListener('click', (e) =>{
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
});

let tekst = "      Neki    tekst   ";
// console.log(tekst);
// console.log(tekst.trim());

tekst = "     ";
// console.log(tekst);


