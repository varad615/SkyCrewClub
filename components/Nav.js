import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Logo from "../public/Pictures/SkyCrew Logo PNG.png"

const Navbar = () => {
  return (
    <div className={styles.outer}>
          <div className={styles.Navbar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" height={40} width={110} />
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <Link href="#"><a>Courses</a></Link>
          </li>
          <li className={styles.button}>
            <button>V</button>
          </li>

        </ul>
        
      </div>
    </div>
    </div>
  );
};

export default Navbar;