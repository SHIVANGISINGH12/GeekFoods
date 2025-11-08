import { Header } from "../../components/Header/Header";
import styles from "./ContactPage.module.css";

export function ContactPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <h4>Contact Us</h4>
                    <h1>GET IN TOUCH WITH US</h1>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco.
                    </p>
                    <div className={styles.details}>
                        <div className={styles.locationBox}>
                            <ion-icon name="home-outline"></ion-icon>
                            <div className={styles.rightBox}>
                                <h3>Our Location</h3>
                                <p>99 S.t Jomblo Park Pekanbaru 28292.</p>
                                <p>Indonesia</p>
                            </div>
                        </div>
                        <div className={styles.phoneBox}>
                            <ion-icon name="call-outline"></ion-icon>
                            <div className={styles.rightBox}>
                                <h3>Phone Number</h3>
                                <p>(+62)81 414 257 9980</p>
                            </div>
                        </div>
                        <div className={styles.email}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <div className={styles.rightBox}>
                                <h3>Email Address</h3>
                                <p>info@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="Your Email"></input>
                    <input type="text" placeholder="Your Phone"></input>
                    <textarea type="text" placeholder="Your Message"></textarea>
                    <button className={styles.submitBtn}>Submit</button>
                </div>
            </div>
        </>
    );
}
