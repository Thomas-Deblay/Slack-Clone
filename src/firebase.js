import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDeXPubC8YImYG01y9U_IGN3Y4MMpbSidI',
  authDomain: 'slack-clone-746e2.firebaseapp.com',
  projectId: 'slack-clone-746e2',
  storageBucket: 'slack-clone-746e2.appspot.com',
  messagingSenderId: '587839634700',
  appId: '1:587839634700:web:b63af25af562e7f0c8dd29',
  measurementId: 'G-SP9DECLVLB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
