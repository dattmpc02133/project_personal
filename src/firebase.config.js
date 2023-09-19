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
    apiKey: 'AIzaSyCfDuRf3S-g01iTRE-gF2fU4uHKOYWvaiw',
    authDomain: 'newdata-eb8d4.firebaseapp.com',
    projectId: 'newdata-eb8d4',
    storageBucket: 'newdata-eb8d4.appspot.com',
    messagingSenderId: '492609824818',
    appId: '1:492609824818:web:1670a7eced3cce4d95f42b',
    measurementId: 'G-2BY0ETFQ6V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
