
import NavBar from "@/Components/NavBar";
import styles from "./page.module.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
    
      <NavBar />
     
     <div className={styles.content}>
      <Header />


      </div>
     <Footer/>
    </div>
  );
}
