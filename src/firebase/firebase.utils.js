import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXs66ag5bwK_uWCTEcvyqaJ1DSL1bsTN4',
  authDomain: 'kitchenapp-f170e.firebaseapp.com',
  databaseURL: 'https://kitchenapp-f170e.firebaseio.com',
  projectId: 'kitchenapp-f170e',
  storageBucket: 'kitchenapp-f170e.appspot.com',
  messagingSenderId: '581220072032',
  appId: '1:581220072032:web:e415904c6896f8bd32e105'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, moreData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  //const collectionSnapShot = await collectionRef.get();
  //console.log({ collection: collectionSnapShot.docs.map(doc => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email, photoURL, ...moreData } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...moreData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
