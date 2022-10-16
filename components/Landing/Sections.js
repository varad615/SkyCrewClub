import Image from "next/image";
import Shapes from "../../public/Shapes.png";
import mobileHeroBg from "../../public/mobile-hero-bg.png";
import styles from "../../styles/Main.module.css";
import Trophy from "../../public/trophy.png";
import Saly from "../../public/saly.png";


const Sections = () => {
  return (
    <div className={styles.sections}>
        {/* hero Section */}
        <section className={styles.hero_section}>
          <h4>Rewarding the Next Generation of Learners</h4>
          <div className={styles.boxes}>
            <div className={`${styles.box} ${styles.content}`}>
              <h1>SkyRocket your Skills by building EPIC Stuff.</h1>
            </div>
            <div className={styles.flex_row}>
              <div className={`${styles.box} ${styles.flex} ${styles.trophy}`}>
                <Image
                  src={Trophy}
                  height={165}
                  width={165}
                  objectFit="contain"
                />
                <h1>Rewards & Incentives for Active Learners</h1>
              </div>
              <div className={`${styles.box} ${styles.flex} ${styles.saly}`}>
                <Image src={Saly} objectFit="contain" />
                <h1>Learn along with the Community</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Sections