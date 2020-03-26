import * as firebase from 'firebase/app';
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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any,
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any,
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(objectsToAdd);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    // console.log(newDocRef);
  });

  // eslint-disable-next-line no-return-await
  return await batch.commit();
};

export default firebase;
