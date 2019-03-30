import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyClxDRwnQ58mF7g1f9IOImuuqoYaEk64eg",
    authDomain: "curiobox-1747a.firebaseapp.com",
    databaseURL: "https://curiobox-1747a.firebaseio.com",
    projectId: "curiobox-1747a",
    storageBucket: "curiobox-1747a.appspot.com",
    messagingSenderId: "85036250335"
  };
  firebase.initializeApp(config);

  export default firebase