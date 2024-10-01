import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { BACKEND_URL, VALUE } from "@repo/common/config";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button className={styles.secondary} appName="Web App">
        Hello {VALUE}
      </Button>
      {BACKEND_URL}
    </div>
  );
}
