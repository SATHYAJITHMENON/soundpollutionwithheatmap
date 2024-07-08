// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyC_yAt_AdtlJhK42Da0A5miGoS7hNxLP8I",
//     authDomain: "connection-of-esp8266.firebaseapp.com",
//     databaseURL: "https://connection-of-esp8266-default-rtdb.firebaseio.com",
//     projectId: "connection-of-esp8266",
//     storageBucket: "connection-of-esp8266.appspot.com",
//     messagingSenderId: "12204816685",
//     appId: "1:12204816685:web:cc544867ced69b24213ba4"
// };


// const app = initializeApp(firebaseConfig);


// const db = getFirestore(app);


// const auth = getAuth(app);

// export { db, auth };


// src/firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC_yAt_AdtlJhK42Da0A5miGoS7hNxLP8I",
    authDomain: "connection-of-esp8266.firebaseapp.com",
    databaseURL: "https://connection-of-esp8266-default-rtdb.firebaseio.com",
    projectId: "connection-of-esp8266",
    storageBucket: "connection-of-esp8266.appspot.com",
    messagingSenderId: "12204816685",
    appId: "1:12204816685:web:cc544867ced69b24213ba4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };