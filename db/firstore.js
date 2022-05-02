import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const appConfiguration = {
  apiKey: "AIzaSyD-pQ5wL-usQxk_6yjkx1bM8pLT6Gci97o",
  authDomain: "saveplace-c0f70.firebaseapp.com",
  databaseURL: "https://saveplace-c0f70-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "saveplace-c0f70",
  storageBucket: "saveplace-c0f70.appspot.com",
  messagingSenderId: "368523463052",
  appId: "1:368523463052:web:cd886e91f4b0797a19eea9",
  measurementId: "G-7XPKL78X8H"
};

export const session_type = firebase.auth.Auth.Persistence.LOCAL;

 const app = firebase.initializeApp(appConfiguration);
 const db = app.firestore();
 const storage = app.storage();

 export default { firebase,app,db,storage}
