import styles from "../styles/Main.module.css";
import Sections from "../components/Landing/Sections";
import Navbar from "../components/Landing/Navbar";

export default function Home() {
  return (
    <>
      <div className={styles.container}></div>
      <Navbar />
      <Sections />
    </>
  );
}
