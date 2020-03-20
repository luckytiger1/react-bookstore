import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPWYcXnOLOKv3uvAYAkzp4TP7YaNfiV7k',
  authDomain: 'bookstore-db-28667.firebaseapp.com',
  databaseURL: 'https://bookstore-db-28667.firebaseio.com',
  projectId: 'bookstore-db-28667',
  storageBucket: 'bookstore-db-28667.appspot.com',
  messagingSenderId: '818578389540',
  appId: '1:818578389540:web:a8de3e275a457206c136b1',
  measurementId: 'G-C80YR9PE2S',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
