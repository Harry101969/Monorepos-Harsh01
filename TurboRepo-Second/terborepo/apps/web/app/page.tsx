import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}></div>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
    </div>
  );
}
