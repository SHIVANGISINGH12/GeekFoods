import styles from "./Header.module.css";
import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router";
import { useLocation } from "react-router";

export function Header() {
    const location = useLocation();

    const isActive = (routeName) => {
        if (routeName == location.pathname) return ` ${styles.activate}`;
        return "";
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img className={styles.img} src={logoImg} alt="logo" />
                <h2>GeekFoods</h2>
            </div>
            <div className={styles.tabsContainer}>
                <div className={styles.home + isActive("/")}>
                    <Link to="/" className={styles.link}>
                        Home
                    </Link>
                </div>
                <div className={styles.Quote + isActive("/quotes")}>
                    <Link to="/quotes" className={styles.link}>
                        Quotes
                    </Link>{" "}
                </div>
                <div className={styles.Restaurants + isActive("/restaurants")}>
                    <Link to="/restaurants" className={styles.link}>
                        Restaurants
                    </Link>
                </div>
                <div className={styles.Contact + isActive("/contact")}>
                    <Link to="/contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
            </div>
            <button className={styles.btn}>Get Started</button>
        </div>
    );
}
