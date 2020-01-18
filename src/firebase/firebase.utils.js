import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDU4h2TiE9ADUaNjQMGB2rBbYEenqkY-zU",
  authDomain: "cg-crown-clothing.firebaseapp.com",
  databaseURL: "https://cg-crown-clothing.firebaseio.com",
  projectId: "cg-crown-clothing",
  storageBucket: "cg-crown-clothing.appspot.com",
  messagingSenderId: "440129171382",
  appId: "1:440129171382:web:2b8d68e57ce11ac8ba1b17",
  measurementId: "G-QPLTJ27QJX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
