import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarResponsive from "../components/NavbarResponsive/NavbarResponsive";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import ProfilePage from "../components/UserProfile/UserProfile";
import EditProfile from "../components/EditProfile/EditProfile";
import HistoryOrder from "../components/UserProfile/HistoryOrder";
const UserPage = () => {
    const [hamActive, setHamActive] = useState(false);
    return (
      <div className="App">
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <ProfilePage/>
        <EditProfile/>
        <HistoryOrder/>
        <Footer/>
      </div>
    );
  };
  
  export default UserPage;