import React from "react";
import styles from "../styles/Profilesetting.module.css";
import { Input } from "@nextui-org/react";
import Nav from "../components/Nav";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiGoogleearth, SiDribbble, SiBehance } from "react-icons/si";
// import Image from "next/image"
// import Info from "../public/Info.png"

const profilesetting = () => {
  return (
    <div className={styles.profilepage}>
      <div>
        <Nav />
        <div className={styles.container}>
          {/* <div> */}
          <div className={styles.lr}>
            <div className={styles.left}>
              <div className={styles.cont1}>
                <h2>Public profile settings</h2>
                <p>
                  you can control your profile and limit what is shown on search
                  engines
                </p>
                {/* FIRSTNAMEPIC  */}
                <div className={styles.picandname}>
                  <div className={styles.pic}>V</div>
                  <div className={styles.name}>
                    <label for="first">
                      First name <span>*</span>
                    </label>
                    <br></br>
                    <input type="text" id="first" name="first" />
                  </div>
                </div>
                {/* EMAIL */}
                <div className={styles.email}>
                  <label for="email">
                    Email <span>*</span>
                  </label>
                  <br></br>
                  <input type="text" id="email" name="email" />
                </div>
                {/* ONe LINER  */}
                <div className={styles.liner}>
                  <label for="liner">
                    One-Liner <span>*</span>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="A developer who can design and innovate as well"
                  />
                </div>
                {/* BASED  */}
                <div className={styles.based}>
                  <label for="based">
                    Where are you based? <span>*</span>
                  </label>
                  <br></br>
                  <input type="based" id="based" name="based" />
                </div>
              </div>
              <div className={styles.cont2}>
                <h2>Socials</h2>
                <p>Enter your Social media handles below</p>
                <div className={styles.cc2}>
                  <div className={styles.cloumn1}>
                    {/* GITHUB  */}
                    <div className={styles.github}>
                      <label for="github">
                        <AiFillGithub /> Github
                      </label>
                      <br></br>
                      <input type="text" id="github" name="github" />
                    </div>
                    {/* LINKEDIN  */}
                    <div className={styles.linkedin}>
                      <label for="linkedin">
                        <AiFillLinkedin /> LinkedIn
                      </label>
                      <br></br>
                      <input type="text" id="linkedin" name="linkedin" />
                    </div>
                    {/* DRIBBLE  */}
                    <div className={styles.dribble}>
                      <label for="dribble">
                        <SiDribbble /> Dribble
                      </label>
                      <br></br>
                      <input type="text" id="dribble" name="dribble" />
                    </div>
                  </div>
                  <div className={styles.cloumn2}>
                    {/* TWITTER  */}
                    <div className={styles.twitter}>
                      <label for="twitter">
                        <AiOutlineTwitter /> Twitter
                      </label>
                      <br></br>
                      <input type="text" id="twitter" name="twitter" />
                    </div>
                    {/*  WEBSITE */}
                    <div className={styles.website}>
                      <label for="website">
                        <SiGoogleearth /> Website
                      </label>
                      <br></br>
                      <input type="text" id="website" name="website" />
                    </div>
                    {/* BEHANCE  */}
                    <div className={styles.behance}>
                      <label for="behance">
                        <SiBehance /> Behance
                      </label>
                      <br></br>
                      <input type="text" id="behance" name="behance" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cont3}>
                <h2>Connect Wallet</h2>
                <p>
                  Connect your wallet to show off your NFTs and Wallet
                  activities
                </p>
                <button>Connect Wallet</button>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rcont1}>
                <div className={styles.save}>
                  <button>Save</button>
                </div>
                <div className={styles.preview}>
                  <button>Preview</button>
                </div>
              </div>
              {/* <div className={styles.rcont2}>
                <Image src={Info} alt="card"/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default profilesetting;
