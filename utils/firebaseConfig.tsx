// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBEVOmnosNjbVa2mE6Kqp2pg9V-zNKFszY",
    authDomain: "sosa-anime.firebaseapp.com",
    databaseURL: "https://sosa-anime-default-rtdb.firebaseio.com",
    projectId: "sosa-anime",
    storageBucket: "sosa-anime.appspot.com",
    messagingSenderId: "905818129501",
    appId: "1:905818129501:web:a8fd0aa8daaebed2c9b9b4",
    measurementId: "G-LS5N8PEQMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const auth = getAuth()

export { app, auth, db }