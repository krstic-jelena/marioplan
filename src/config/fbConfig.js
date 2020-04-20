import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfAR-OzhDwX_uSrPOUb6GQnSh8pOIMpSk",
  authDomain: "marioplan-afa22.firebaseapp.com",
  databaseURL: "https://marioplan-afa22.firebaseio.com",
  projectId: "marioplan-afa22",
  storageBucket: "marioplan-afa22.appspot.com",
  messagingSenderId: "416487573810",
  appId: "1:416487573810:web:07ded356a1d47f0323ef2b",
  measurementId: "G-ETQ0M26SWQ",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
