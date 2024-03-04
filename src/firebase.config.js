import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDou_N5QMriGKjp2WJr4jsPX2FueV-3ktg',
    authDomain: 'myproject-92053.firebaseapp.com',
    projectId: 'myproject-92053',
    storageBucket: 'myproject-92053.appspot.com',
    messagingSenderId: '106006630481',
    appId: '1:106006630481:web:a22d346f0b376495ce2870',
    measurementId: 'G-DPMBJJ9PVG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
