import 'firebase/firestore';

export default class Firebase {
    constructor(firebase) {
        var config = {
            apiKey: "AIzaSyDn3Kg6ZbE3ozO4JvqW38reLIv79CkYxUo",
            authDomain: "devwebapplimobile.firebaseapp.com",
            databaseURL: "https://devwebapplimobile.firebaseio.com",
            projectId: "devwebapplimobile",
            storageBucket: "devwebapplimobile.appspot.com",
            messagingSenderId: "624557437842"
        };

        firebase.initializeApp(config);
        this.db = firebase.firestore();
    }


    addUser(data, callback) {
        return new Promise((resolve, reject)=>{
            this.db.collection("actor").add(Object.assign({}, data)).then(newData=>{
                console.log("Document written with ID : ", newData.id);
                data.id = newData.id;
                resolve(data);
            })
        })
    }
}
