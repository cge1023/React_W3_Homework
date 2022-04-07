import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA8YpNnGveL84QxKE993NGWNIQzjABOBC0",
  authDomain: "image-community-6022e.firebaseapp.com",
  projectId: "image-community-6022e",
  storageBucket: "image-community-6022e.appspot.com",
  messagingSenderId: "188109814509",
  appId: "1:188109814509:web:94160694f5fae172676ae4",
  measurementId: "G-WWHVTYYMY2",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
