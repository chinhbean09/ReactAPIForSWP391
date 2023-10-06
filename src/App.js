import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Home from "./components/Staff/Home";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CheckBoxList from "./components/CheckBoxList/CheckBoxList";
import Footer from "./components/Footer/Footer";
import Name from "./components/Name/Name"
import Service from "./components/Service/Service";
import PopularList from "./components/PopularList/PopularList";
import AllList from "./components/AllList/AllList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ProfilePage from "./components/UserProfile/UserProfile";
import HistoryOrder from "./components/UserProfile/HistoryOrder"
import EditProfile from "./components/EditProfile/EditProfile";
const App = () => {
  const [hamActive, setHamActive] = useState(false);
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <CheckBoxList />
      <PopularList/>
      <AllList />
      <Registration />
      <Login/>
      <Name/>
      <Service/>
      <Footer/>
      <Home/>
      <ShoppingCart/>
      <OrderDetails />
      <ProfilePage/>
      <EditProfile/>
    </div>
  );
};

export default App;