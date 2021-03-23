// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZlXFvKI3I0xRBMaCWhKbJZcrUphXrGI8",
  authDomain: "whatsapp-clone-d7ed0.firebaseapp.com",
  projectId: "whatsapp-clone-d7ed0",
  storageBucket: "whatsapp-clone-d7ed0.appspot.com",
  messagingSenderId: "222614066303",
  appId: "1:222614066303:web:810901c7ad4b7d8f9f5b4a",
  measurementId: "G-169M2T3D4C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
