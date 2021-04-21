import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomeScreen from './Screens/HomeScreen'
import ServicesScreen from './Screens/ServicesScreen'
import TestimonialsScreen from './Screens/TestimonialsScreen'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/services" component={ServicesScreen} />
            <Route path="/testimonials" component={TestimonialsScreen} />
          </Switch>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
