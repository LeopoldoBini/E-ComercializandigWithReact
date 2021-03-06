import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore'


import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgONEsQM5RxwOnnWgSkhImXmgYDXt38cQ",
    authDomain: "e-comreact-coder.firebaseapp.com",
    projectId: "e-comreact-coder",
    storageBucket: "e-comreact-coder.appspot.com",
    messagingSenderId: "1065497342407",
    appId: "1:1065497342407:web:e60ad1ddb95986bd1269e2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const prodCollection =  collection(db , "products")
export const ordenesDeCompraCollection = collection(db, "ordenesDeCompra")
export const newsLetterCollection = collection(db, "suscripcionNewsletter")





