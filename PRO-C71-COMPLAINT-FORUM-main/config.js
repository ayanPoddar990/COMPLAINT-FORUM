import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBhVF7-WnAhfiEvbPJPkuieVZW7g-0XCto",
  authDomain: "complaint-forum-3d129.firebaseapp.com",
  projectId: "complaint-forum-3d129",
  storageBucket: "complaint-forum-3d129.appspot.com",
  messagingSenderId: "161758543114",
  appId: "1:161758543114:web:3388f0d8d858f7c86f0ef3"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

