import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCeiBs6GG1iYbJRwHfZyDXUjmy-OFRlAi4",
    authDomain: "virtualwallet-c962d.firebaseapp.com",
    databaseURL: "https://virtualwallet-c962d.firebaseio.com",
    projectId: "virtualwallet-c962d",
    storageBucket: "virtualwallet-c962d.appspot.com",
    messagingSenderId: "50393344941",
    appId: "1:50393344941:web:634edca7ad3f939ad78f24",
    measurementId: "G-H1NDZRT76H"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;
 