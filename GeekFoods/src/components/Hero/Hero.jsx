import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h1 className={styles.heading1}>Let us find your</h1>
          <h1 className={styles.heading2}>Forever Food.</h1>
        </div>
        <div className={styles.paraContainer}>
          <p className={styles.para1}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className={styles.para2}>
            Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.btn1}>Search Now</button>
            <button className={styles.btn2}>Know more</button>
        </div>
      </div>
    </div>
  );
}
