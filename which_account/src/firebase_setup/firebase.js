// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// import { firebase } from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTNkQ4AWVK1Ogruk_5_Whk27Y31kDS-Xg",
  authDomain: "which-account.firebaseapp.com",
  projectId: "which-account",
  storageBucket: "which-account.appspot.com",
  messagingSenderId: "361248778511",
  appId: "1:361248778511:web:6f1fa15ef280d258e6b67a",
  measurementId: "G-VG1QC6VSSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);