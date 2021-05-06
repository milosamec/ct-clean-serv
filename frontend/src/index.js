import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import firebase from "firebase/app";
import 'firebase/firebase-database'
import {firebaseConfig} from './config/config'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
