import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA4GhCKmIhnvLdE-FiNDTGYQJS1IYFxDTA',
  authDomain: 'crwn-db-1eec7.firebaseapp.com',
  databaseURL: 'https://crwn-db-1eec7.firebaseio.com',
  projectId: 'crwn-db-1eec7',
  storageBucket: 'crwn-db-1eec7.appspot.com',
  messagingSenderId: '924091151907',
  appId: '1:924091151907:web:816d868c15fd2c90272396',
  measurementId: 'G-HVGNG9B7N9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
