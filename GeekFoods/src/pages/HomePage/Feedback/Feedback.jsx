import styles from "./Feedback.module.css";
import userImg from "../../../assets/images/feedbackUser.avif";

export function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.box1}>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima dicta amet, molestiae aliquam incidunt suscipit
                recusandae labore ratione doloremque, architecto et illo minus
                quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel
                ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem
                nam, eveniet enim ad inventore laudantium est illum voluptatem
                quis.
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                beatae incidunt perferendis soluta facilis voluptas dicta
                repudiandae quasi asperiores libero, exercitationem molestiae
                autem sapiente dolore nulla non consequatur. Eaque, dolores.
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                a voluptatum quidem tione dolus
                quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel
                ab! Ipsam corrupti blanditiis dolorum! nulla quisquam natus
                velit provident earum esse, odio numquam labore recusandae
                similique sunt.
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem, ipsumtione dolus deserunt quos expedita minima incidunt sed tempora, a
                architector sit amet, reprehenderit, in repellat voluptatum.
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box3}>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                doloribus eius aut unde, dolores accusantium!
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className={styles.feedbackContainer}>
            <div className={styles.box}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                ut necessitatibus, repudiandae qui dolor minima.
              </p>
            </div>
            <div className={styles.user}>
              <img src={userImg} alt="" />
              <div className={styles.details}>
                <p>Gladis Lennon</p>
                <p className={styles.position}>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
