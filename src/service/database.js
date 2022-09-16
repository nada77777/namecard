import { getDatabase, ref, set } from "firebase/database";




class Database {
    constructor(firebase){
        this.database = getDatabase(firebase);

    }

    writeDatabase = (userId, card) => {
            set(ref(this.database, `users/${userId}/${card.id}`), card);
            console.log('write datebase');
            console.log(userId, card);
    }
    


    readDatabase = () => {

       
        
    }




}

export default Database