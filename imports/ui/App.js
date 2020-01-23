import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import LinkForm from './Link-UI/Link'

const App = () => (
  <div className="app">
    <Navbar />
    <h1 className="text-center">Welcome to Bit_Ly</h1>
    <LinkForm />
    <Footer />
  </div>
);

export default App;
