import React from 'react';
import Navbar from '../components/navbar/Navbar';
import "./home.scss"

const Home = () => {
  return (
  <div className='home'>
      <Navbar/>
      <img width="100%" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
  </div>
  )
};

export default Home;

