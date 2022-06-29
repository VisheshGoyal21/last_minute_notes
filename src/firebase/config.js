import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDMcKXyunoq2xd4psM04OrkXCO_5vi60tQ",
    authDomain: "lastminutenotes-1e01f.firebaseapp.com",
    projectId: "lastminutenotes-1e01f",
    storageBucket: "lastminutenotes-1e01f.appspot.com",
    messagingSenderId: "477141049613",
    appId: "1:477141049613:web:6ea541579751492215d044"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}