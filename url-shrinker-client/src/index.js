import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDQIpP9WciM7OIXwZabdBOJx7-XxRkSbl4",
  authDomain: "url-shrinker-client.firebaseapp.com",
  databaseURL: "https://url-shrinker-client-default-rtdb.firebaseio.com",
  projectId: "url-shrinker-client",
  storageBucket: "url-shrinker-client.appspot.com",
  messagingSenderId: "465936728838",
  appId: "1:465936728838:web:6cd053da504b3cdfd55487",
  measurementId: "G-RXQBYQ0LHD"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
