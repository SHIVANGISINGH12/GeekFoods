import styles from "./Footer.module.css";
import logoipsum from "../../assets/images/logoipsum.svg";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoipsum}>
        <img src={logoipsum} alt="" />
      </div>
      <div className={styles.paraContainer}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
      </div>
      <div className={styles.optionsContainer}>
        <p>About</p>
        <p>Careers</p>
        <p>History</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Blog</p>
      </div>
      <div className={styles.iconContainer}>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="basketball-outline"></ion-icon>
      </div>
    </div>
  );
}
