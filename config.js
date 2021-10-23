import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBTkqhAlJI-PETtKPRLS-C2HqrHsLypFVU",
  authDomain: "story-hub-7784e.firebaseapp.com",
  databaseURL: "https://story-hub-7784e-default-rtdb.firebaseio.com",
  projectId: "story-hub-7784e",
  storageBucket: "story-hub-7784e.appspot.com",
  messagingSenderId: "590900675123",
  appId: "1:590900675123:web:48cbb9f3ccfcc74d1f1946"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()