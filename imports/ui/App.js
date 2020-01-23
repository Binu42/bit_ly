import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import LinkForm from './Link-UI/Link'
import Link_list from './Link-UI/Link_list'

const App = () => (
  <div className="app">
    <Navbar />
    <h1 className="text-center" style={{ "marginTop": "80px" }}>Welcome to Bit_Ly+</h1>
    <LinkForm />
    <Link_list />
    <Footer />
  </div>
);

export default App;
