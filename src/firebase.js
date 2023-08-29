import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyFVFmHq4-Xr7UiX1yDJqfw0Z33brgU4I",
    authDomain: "network24x7.firebaseapp.com",
    projectId: "network24x7",
    storageBucket: "network24x7.appspot.com",
    messagingSenderId: "663787285387",
    appId: "1:663787285387:web:1a2305004d404bad3d9d8e"
  };
  const fa=firebase.initializeApp(firebaseConfig);
  const db=fa.firestore();
  const auth=firebase.auth();

   export{db,auth};  