// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_API_KEY,
//   authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FB_PROJECT_DOMAIN,
//   storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FB_MESSAGING_ID,
//   appId: process.env.REACT_APP_FB_APP_ID,
//   measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCf5kIpglXfGyu4dGm3lUef30ZgM0smLLc',
  authDomain: 'squad-manito-manita.firebaseapp.com',
  projectId: 'squad-manito-manita',
  storageBucket: 'squad-manito-manita.appspot.com',
  messagingSenderId: '150374721393',
  appId: '1:150374721393:web:394077898f0ed12bd638d0',
  measurementId: 'G-75GSDHP15N',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getCollection = async (collectionName: string) => {
  const col = collection(db, collectionName);
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return list;
};

export const setCollection = async (
  collectionName: string,
  id: string,
  data: any
) => {
  const col = collection(db, collectionName);
  setDoc(doc(col, id), data);
};
