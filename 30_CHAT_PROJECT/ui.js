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

    templateLi(data){
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);

        let listHtml =
        `<li>
            ${data.username} : ${data.message}
            <br>
            ${strDate}
            
            
        </li>
        `
        this.lista.innerHTML += listHtml
    }
}



export default ChatUl