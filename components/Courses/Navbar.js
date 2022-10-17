import React from "react";
// import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import Image from "next/image";
import Logo from "../../public/Pictures/SkyCrew Logo PNG.png";
import { Link, Dropdown, Avatar, Text, Grid } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" height={40} width={110} />
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="#">
                <a className={styles.courses}>Courses</a>
              </Link>
            </li>
            <li className={styles.button}>
              {/* <button>V</button> */}
              <Dropdown placement="bottom-left" >
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    size="lg"
                    text="T"
                    color="secondary"
                    textColor="white"
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item
                    key="profile"
                    css={{
                      height: "$18"
                    }}
                  >
                    <Text b color="inherit" css={{ d: "flex" }}>
                      wallet id:
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>Hello</Text>
                  </Dropdown.Item>
                  <Dropdown.Item key="profilePage" withDivider>
                    <Link href="/" color="secondary">
                      Public Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="analytics" withDivider>
                    <Link href="/dashboard" color="secondary">
                      Switch to Educator Mode
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="help_and_feedback" withDivider>
                    <Link href="/" color="secondary">
                      Profile Setting
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="logout" color="error" withDivider>
                    <button>
                      Log out
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
