import styles from "./Header.module.css";
import logoImg from "../../assets/images/logo.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img className={styles.img} src={logoImg} alt="logo" />
        <h2>GeekFoods</h2>
      </div>
      <div className={styles.tabsContainer}>
        <div className={styles.home}>Home</div>
        <div className={styles.Quote}>Quote</div>
        <div className={styles.Restaurants}>Restaurants</div>
        <div className={styles.Foods}>Foods</div>
        <div className={styles.Contact}>Contact</div>
      </div>
      <button className={styles.btn}>Get Started</button>
    </div>
  );
}
