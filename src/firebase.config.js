import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAv299Iou75xPVTAcYBhZm-nlrGJny2kV4',
    authDomain: 'storedata-425cf.firebaseapp.com',
    projectId: 'storedata-425cf',
    storageBucket: 'storedata-425cf.appspot.com',
    messagingSenderId: '447425043026',
    appId: '1:447425043026:web:3c7b69c1a5887bbf045d8b',
    measurementId: 'G-D52LZHB2C9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
