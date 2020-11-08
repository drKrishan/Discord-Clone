import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xmy4Q2g9oqIjJuG1EXoPMnSgn1Y-tpw",
  authDomain: "dev-discord-clone.firebaseapp.com",
  databaseURL: "https://dev-discord-clone.firebaseio.com",
  projectId: "dev-discord-clone",
  storageBucket: "dev-discord-clone.appspot.com",
  messagingSenderId: "208133674601",
  appId: "1:208133674601:web:e9446550c062f2768d74f8",
  measurementId: "G-QCSQL0HFX8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
