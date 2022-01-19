class Auto {
    constructor(m, b, ik, bv = 5){
        this.marka = m; // poziva se seter marka
        this.boja = b; // poziva se seter boja
        this.imaKrov = ik; // poziva se seter imaKrov
        this.brVrata = bv; // poziva se seter brVrata
    }

    sviraj(){
        console.log("Beep! Beep!");
    }

    vozi(x){
        // let m = this._marka
        console.log(`Auto ${this.marka} vozi ${x} km`);
    }

    stampaj(){
        console.log(`Auto marke ${this.marka}, boje ${this.boja}, ima krov: ${this.imaKrov},`);
    }
    // Svuda su pozvani geteri

    // Seter i geter za polje _marka
    set marka(m) {
        let m1 = m.trim();
        if(m1.length > 0) {
            this._marka = m1;
        }
        else{
            this._marka = "Auto";
        }
    }
    get marka() {
        return this._marka
    }

    // Seter i geter za polje _boja
    set boja(b){
        this._boja = b;
    }
    get boja(){
        return this._boja
    }

    // Seter i geter za polje _imaKrov
    set imaKrov(ik){
        if(ik === true || ik === false){
            this._imaKrov = ik;
        }
        else{
            this._imaKrov == false
        }
    }
    get imaKrov(){
        return this._imaKrov;
    }

    // Seter i geter za polje _brVrata
    set brVrata(bv){
        if(bv > 0){
            this._brVrata == bv
        }
        else{
            this._brVrata == 1;
        }
    }
    get brVrata(){
        return this._brVrata
    }
}

export default Auto;

// PRAKSA:
// Jedino geteri i seteri




// Metoda koja postavlja vrednost polja _marka
// postaviMarku(m) {
//     let m1 = m.trim();
//     if(m1.length > 0) {
//         this._marka = m1;
//     }
//     else{
//         this._marka = "Auto";
//     }
// }

// // Metoda koja cita vrednost polja
// dohvatiMarku(){
//     return this._marka
// }