import styles from "./Quote.module.css";

export function Quote({ message, saidBy }) {
  return (
    <div className={styles.quotesContainer}>
      <p className={styles.message}>{message}</p>
      <p className={styles.saidBy}>{saidBy}</p>
    </div>
  );
}
