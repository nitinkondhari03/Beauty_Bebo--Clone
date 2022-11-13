import logo from './logo.svg';
import './App.css';
import NavbarMain from './Navbar/NavbarMain';
import AllRoutes from "./Routes/AllRoutes";
import HomeMain from './Homes/HomeMain';
import Footer from './Homes/Footer';
import Practies from './Context/practices'
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <AllRoutes/>
      <Footer/>
    </div>

  );
}

export default App;
