class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chat = db.collection('chats')
    }
    // SETERI
    set room(r){
        this._room = r
    }
    set username(u){ 
            this._username = u;
    }

    // GETERI
    get room(){
        return this._room
    }
    get username(){
        return this._username
    }
    updateUsername(uu){
        this._username = uu;
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
    getChats(callback){
        this.chat
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot( snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == "added"){
                    // console.log("uspesno");
                    callback(change.doc.data())
                }
            })
        });
    }
}

export default Chatroom

