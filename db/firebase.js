import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAHMqXThAbIVOqERcH7eHr0CIhW76j4VXI',
  authDomain: 'docs-96490.firebaseapp.com',
  projectId: 'docs-96490',
  storageBucket: 'docs-96490.appspot.com',
  messagingSenderId: '870002847334',
  appId: '1:870002847334:web:a4f46ee358fa156d8007a7',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db };
