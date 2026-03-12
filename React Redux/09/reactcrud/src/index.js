import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDF_df562-NTLw5ZQ3zUE0yS0Ns4dAgsM",
  authDomain: "react-app-30178.firebaseapp.com",
  projectId: "react-app-30178",
  storageBucket: "react-app-30178.firebasestorage.app",
  messagingSenderId: "725702030531",
  appId: "1:725702030531:web:79373e110c6f1225da1e76",
  measurementId: "G-GK3PMX6R37"
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
