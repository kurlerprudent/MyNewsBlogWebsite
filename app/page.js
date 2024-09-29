
import styles from "./page.module.css";
import Header from "@/Components/Header";
import News from "@/Components/News";


export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.content}>
      <Header />
      </div>
      <div className={styles.newsContainer}>
      <News/>
      </div>
    </div>
  );
}
