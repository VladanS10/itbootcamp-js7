export class Film {
    constructor(n, r, gi, o){
        this.naslov = n;
        this.reziser = r
        this.godinaIzdanja = gi
        this.ocene = o;
    }

    set naslov(n){
        this._naslov = n
    }
    get naslov(){
        return this._naslov
    }
    set reziser(r){
        this._reziser = r
    }
    get reziser(){
        return this._reziser
    }
    set godinaIzdanja(gi){
        if(gi >= 1800){
            this._godinaIzdanja = gi
        }
        else{
            this._godinaIzdanja = 1800
        }
    }
    get godinaIzdanja(){
        return this._godinaIzdanja
    }
    set ocene (o){
        this._ocene = o;
    }
    get ocene(){
        return this._ocene;
    }
    
    dodajOcenu(novaOcena){  
        this._ocene.push(novaOcena);
    }
    stampaj() {
        document.body.innerHTML += `<p style = "color:red;">${this.naslov}<p> <br>`
    }
    prosek(){
        let zbir = 0
        for(let i = 0; i < this._ocene.length; i++){
            zbir += this._ocene[i]
        }
        let srOcena = zbir / this._ocene.length
        return srOcena
    }
}


