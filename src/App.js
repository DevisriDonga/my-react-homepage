import React from 'react';


import Footer from './components/footer/footer';
import './App.css';
import Offers from './components/offers/offers';
import Models from './components/models/models';
import Shop from './components/shop/shop';

import Header from './components/header/Header';
import NavbarPrimary from './components/navbar/navbar';
import NavbarSecondary from './components/navbar2/Navbar2';
import Design from './components/design/design';
import Cards from './components/cards/cards';

function App() {
  return (
    <div className="App">
  <NavbarPrimary/>
  <NavbarSecondary/>
    <Header/>
    <Cards/>
    <Design />
    <Shop/>
    <Models/>
    <Offers/>
    <Footer />
  </div>
   );
}

export default App;
