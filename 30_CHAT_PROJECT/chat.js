class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chat = db.collection('chats');
        this.unsub = false 
    }
    // SETERI
    set room(r){
        this._room = r
    }
    set username(u){ 
        if (this.validate_user(u)) {
            this._username = u;
          } 
        else {
            alert(
              "Username must be between 2 and 10 characters long and cannot be made of spaces only"
            );
          }
      
    }

    // GETERI
    get room(){
        return this._room
    }
    get username(){
        return this._username
    }
    updateUsername(u) {
        if (this.validate_user(u)) {
          this._username = u;
          localStorage.setItem('lsUsername', u)
        } else {
          alert(
            "Username must be between 2 and 10 characters long and cannot be made of spaces only"
          );
        }
      }
    validate_user(u){

        let u1 = u.trim();
        if (u1.length >= 2 && u1.length <= 10) {
          return true;
        } else {
          return false;
        }
      }
    updateRoom(r){
        this.room = r
    }
    // Update rooma
    updateRoom(ur) {
        this.room = ur;
        if(this.unsub != false){
            this.unsub();
        }
    }
    deleteMsg(id){
        this.chat
        .doc(id)
        .delete()
        .then((data)=>{

            console.log(`Uspsno obrisano ${data}`);
        }
        )
        .catch(err=>{
            console.log(`greska ${err}`);
        });
    }
    
    async addChat(msg) {
        let date = new Date()
        let docChat = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        }
        let response = await this.chat.add(docChat)
        return response;
    }
    

    filterDate(callback, startDate, endDate){
        this.unsub = this.chat
        .where('room', '==', this.room)
        .where('created_at', '>=', startDate)
        .where('created_at', '<=', endDate)
        .orderBy('created_at')
        .onSnapshot( snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == "added"){
                    callback(change.doc)
                }
            })
        });
    }

    getChats(callback){
        this.unsub = this.chat
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot( snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == "added"){
                    callback(change.doc)
                }
            })
        });
    }
}

export default Chatroom
