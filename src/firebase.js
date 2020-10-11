import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAsS-U2QinmcgzkZCZ9_D20d09fLooP8EY",
    authDomain: "auth-demo-924fb.firebaseapp.com",
    databaseURL: "https://auth-demo-924fb.firebaseio.com",
    projectId: "auth-demo-924fb",
    storageBucket: "auth-demo-924fb.appspot.com",
    messagingSenderId: "950234263138",
    appId: "1:950234263138:web:c6823930ce7bc1a2422b3b",
    measurementId: "G-TBEWWPWE8W"
})

export const auth = app.auth()
export default app