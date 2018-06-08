import * as firebase from 'firebase' ;



// Initialize Firebase
var config = {
    apiKey: "AIzaSyD42VL0Qnz-Cw9I2yzWfp_NZG2Q2t8LSpE",
    authDomain: "gooo-d0a92.firebaseapp.com",
    databaseURL: "https://gooo-d0a92.firebaseio.com",
    projectId: "gooo-d0a92",
    storageBucket: "gooo-d0a92.appspot.com",
    messagingSenderId: "11496465034"
};




    const app = firebase.initializeApp(config);




const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider()
var googleProvider = new firebase.auth.GoogleAuthProvider();
export {
    auth,
    app,
    facebookProvider,
    googleProvider
};