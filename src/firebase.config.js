// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import {getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBWGACsi7WK_kM5go4SSBPdNheX6cMrsF4",
//   authDomain: "maltimart-99a78.firebaseapp.com",
//   projectId: "maltimart-99a78",
//   storageBucket: "maltimart-99a78.appspot.com",
//   messagingSenderId: "507612319450",
//   appId: "1:507612319450:web:48fc316e2018a4f0d2dfe3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const  auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBDd5H5BqeoQphvTZ-PYnjGQqlxTPtSWG4',
    authDomain: 'projectperson-dd358.firebaseapp.com',
    projectId: 'projectperson-dd358',
    storageBucket: 'projectperson-dd358.appspot.com',
    messagingSenderId: '33960310421',
    appId: '1:33960310421:web:cec779e27206378bfb4d9c',
    measurementId: 'G-5BP6T0R8T2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
