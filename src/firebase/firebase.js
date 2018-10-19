import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBh3icoYCT51XZDQGyUW2OWB1wLXFPg9E4",
  authDomain: "burguer-queen-dfeeb.firebaseapp.com",
  databaseURL: "https://burguer-queen-dfeeb.firebaseio.com",
  projectId: "burguer-queen-dfeeb",
  storageBucket: "burguer-queen-dfeeb.appspot.com",
  messagingSenderId: "1084432544607"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
