import styles from "../Navbar/Navbar.module.css";

const NavbarResponsive = ({ hamActive }) => {
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Home
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            About            
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Stores
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Profile
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Join us

            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Log in

            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            Sign Up 
                       </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
            {/* <a className={styles.icon1}><i class="fas fa-cart-plus"></i></a> */}
            <i class="fas fa-cart-plus"></i>

            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
           <i class="fas fa-bell"></i>
        

            </a>
          </li>
         
        </ul>
        
      </div>
    </div>
  );
};

export default NavbarResponsive;
