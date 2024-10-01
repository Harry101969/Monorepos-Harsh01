import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button className={styles.secondary} appName="Web App">
        Hello
      </Button>
    </div>
  );
}
