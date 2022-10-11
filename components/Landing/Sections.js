import Image from "next/image";
import styles from "../../styles/Main.module.css";
import Logo from "../../public/Logo.png";

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
            <Image src={Logo} />
              <h1>Rewards & Incentives for Active Learners</h1>
            </div>
            <div className={`${styles.box} ${styles.flex} ${styles.saly}`}>
              <img
                src="saly.png"
                height={165}
                width={165}
                objectFit="contain"
              />
              <h1>Learn along with the Community</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
