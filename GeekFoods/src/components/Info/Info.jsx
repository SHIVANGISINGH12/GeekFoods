import styles from "./Info.module.css";
import InfoImg from "../../assets/images/InfoImg.jpeg";

export function Info() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img className={styles.img} src={InfoImg} alt="infoImage" />
        <div className={styles.infoContainer}>
          <div className={styles.content}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button className={styles.btn}>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
