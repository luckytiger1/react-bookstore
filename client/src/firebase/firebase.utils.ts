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

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any,
): Promise<any> => {
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
  objectsToAdd: object[],
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj: object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // eslint-disable-next-line no-return-await
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot: any) => {
  const transformedCollection = collectionsSnapshot.docs.map(
    (docSnapshot: any) => {
      return {
        ...docSnapshot.data(),
      };
    },
  );
  return transformedCollection;
};

export const getUserCartRef = async (userId: any) => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export default firebase;
