class ChatUl {
    constructor(l){
        this.lista = l
    }

    // Seter i Geter za listu
    set lista(l){
        this._lista = l
    }
    get lista(){
        return this._lista
    }


    formatDate(date){
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        d = String(d).padStart(2, "0")
        m = String(m).padStart(2, "0")
        h = String(h).padStart(2, "0")
        min = String(min).padStart(2, "0")

        let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;

        return strDate;
    }
    
   
    templateLi(doc){
        let id = doc.id;
        let data = doc.data();
        let iconDelete = '<i class="fas fa-trash-alt"></i>';
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);
        let listItem = document.createElement('li')
        listItem.classList.remove('right')
        let today = new Date();
        if(data.message != ""){
            if(date.getDate() === today.getDate()){
                listItem.setAttribute('id', id);
                listItem.innerHTML =
                `<span>${data.username}</span> : ${data.message}
                <br>
                ${String(date.getHours()).padStart(2, "0")}:${String(
                    date.getMinutes()
                  ).padStart(2, "0")} ${iconDelete}`
                if(data.username == localStorage.lsUsername){
                    listItem.classList.add("right")
                }
                else{
                    listItem.classList.add('left')
                }
                this.lista.appendChild(listItem);
            }
            
            else{
                listItem.setAttribute('id', id);
                listItem.innerHTML =
                `
                <span>${data.username}</span> : ${data.message}
                <br>
                ${strDate} ${iconDelete}
                `;
                listItem.classList.remove('right');
                if(data.username == localStorage.lsUsername){
                    listItem.classList.add('right')
                }
            }
            this.lista.appendChild(listItem);
        }
    }

    clear(){
        this.lista.innerHTML = "";
    }
}

export default ChatUl