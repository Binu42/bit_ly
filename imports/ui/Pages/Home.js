import React from 'react'
import LinkForm from '../Link-UI/Link'
import Link_list from '../Link-UI/Link_list'

const Home = () => (
  <div>
    <h1 className="text-center" style={{ "marginTop": "80px" }}>Welcome to Bit_Ly+</h1>
    <LinkForm />
    <Link_list />
  </div>
);

export default Home;