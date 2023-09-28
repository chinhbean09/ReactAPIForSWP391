import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Registration from "./components/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Registration />
      
    </div>
  );
};

export default App;