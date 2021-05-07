import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './hooks/PrivateRoute'
import Navbar from './components/Navbar'
import HomeScreen from './Screens/HomeScreen'
import ServicesScreen from './Screens/ServicesScreen'
import TestimonialsScreen from './Screens/TestimonialsScreen'
import ContactScreen from './Screens/ContactScreen'
import Footer from './components/Footer'
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen'
import DashboardScreen from './Screens/DashboardScreen'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firebase-database'
import {firebaseConfig} from './config/config'



const App = () => {

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)
  const auth = app.auth()
  
  // firebase.analytics();

  return (
    <>
    <Router>
      <Navbar />
        <main style={{overflowX: "hidden"}}>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/services" component={ServicesScreen}/>
            <Route path="/testimonials" component={TestimonialsScreen} />
            <Route path="/contact" component={ContactScreen}/>
            <Route path="/admin06810/register" component={RegisterScreen}/>
            <Route path="/admin06810/login" component={LoginScreen}/>
            <PrivateRoute path="/admin06810/dashboard" auth={auth} component={DashboardScreen} />
          </Switch>
        </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
