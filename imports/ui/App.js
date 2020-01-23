import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Home from './Pages/Home'
import About from './Pages/About'


const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
