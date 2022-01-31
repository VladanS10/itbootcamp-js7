export class Chatroom {
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
}

export default Chatroom

