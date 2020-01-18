import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const App = () => (
  <div className="app">
    <Navbar />
    <h1 className="text-center mt-auto">Welcome to Meteor!</h1>
    <Footer />
  </div>
);

export default App;
