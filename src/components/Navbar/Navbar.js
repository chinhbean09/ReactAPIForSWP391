import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo =
    "echbuon.png";
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>

        <div className={`${styles.navLeft}`}>
        <img src={logo} alt="logo" className={`${styles.brand}`} />
      </div>
      
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Home
            </a>
            <a href="/" className={`${styles.nav} center`}>
              About
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Stores
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Profile
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Join us
            </a>
          </div>

          <div>
          <a href="/" className={styles.login}>
              Log in
            </a>
            
            <button className={styles.signup}>Sign Up</button>
          <a className={styles.icon1}><i class="fas fa-cart-plus"></i></a>
          <a className={styles.icon2}><i class="fas fa-bell"></i></a>
       
            
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
