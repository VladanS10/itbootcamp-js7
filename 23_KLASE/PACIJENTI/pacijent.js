export class Pacijent {
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i){
        this._ime = i
    }
    get ime(){
        return this._ime
    }
    set visina(v){
        if(v > 0 && v < 250){
            this._visina = v
        }
        else{
            this.visina = 180;
        }
    }
    get visina(){
        return this._visina;
    }
    set tezina(t){
        if(t > 0 && t < 550){
            this._tezina = t;
        }
        else{
            this.tezina = 85
        }
    }
    get tezina(){
        return this._tezina
    }
    stampaj() {
        console.log(this);
    }
    stampajListu(){
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }
    bmi(){
        let bMi = this.tezina / ((this.visina / 100) * (this.visina / 100));
        return bMi
    }
    kritican(){
        let kr = false
        if(this.bmi() > 40 || this.bmi() < 15){
            kr = true;
        }
        return kr;
    }
}

