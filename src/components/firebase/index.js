import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBzzVBN_X7GdxY5x5qUSzUtCMTdLO2bUwc",
    authDomain: "tienda-react-2037a.firebaseapp.com",
    projectId: "tienda-react-2037a",
    storageBucket: "tienda-react-2037a.appspot.com",
    messagingSenderId: "919377884567",
    appId: "1:919377884567:web:b935638c5f2956200d80d2",

  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export const baseDatosFB = firebase.firestore(app);
export function getTimestamp() {
  return firebase.firestore.Timestamp.fromDate(new Date())
}