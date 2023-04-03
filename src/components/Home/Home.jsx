import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>EveryBody all navbar show in the home components for react project dom router</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;