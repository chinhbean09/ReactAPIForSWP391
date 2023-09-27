import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
        Laundry for delivery or pickup today
        </h2>

        <div className={styles.slogan}>
          <p>Let us help you keep your clothes clean and shining!</p>
        </div>

        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
        
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://png.pngtree.com/png-clipart/20230120/ourlarge/pngtree-electric-clothes-washing-machine-png-image_6568230.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
