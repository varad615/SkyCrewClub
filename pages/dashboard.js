import Image from "next/image";
import { Link, Dropdown, Avatar, Text, Grid } from "@nextui-org/react";
import Layout from "../components/Dashboard/Layout";
import Vec1 from "../public/Pictures/Vec1.png";
import Vec2 from "../public/Pictures/Vec2.png";
import Vec3 from "../public/Pictures/Vec3.png";
//moralis
import { getSession, signOut } from "next-auth/react";
//update
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";

const dashboard = ({ user }) => {
  const styles = {
    welcome: "text-3xl font-sans font-semibold w-full",
    summaryTitle: "font-medium text-2xl mb-6",
    summary: "my-8",
    sumInfo: "grid grid-cols-3 gap-6 w-full relative",
    Info: " bg-[#4F46BB] rounded-2xl overflow-hidden w-full relative px-3 pt-3 pb-3 flex",
    content: "w-full text-white  px-3",
    con1: "text-lg font-normal",
    con2: "text-3xl font-semibold leading-9 mb-10",
    imageContainer: "absolute -right-16 -top-10"
  };
  const styles2 = {
    container: "px-8 w-full mx-auto max-w-screen-lg 2xl:max-w-screen-2xl py-12"
  };
  const styles3 = {
    wrapper: "flex p-5 drop-shadow-md bg-white",
    content: "w-full flex-1 flex justify-end ",
    profileBut: "cursor-pointer"
  };
  const style4 = {
    truncate: "whitespace-nowrap overflow-hidden text-ellipsis"
  };
  const menuItems = [
    { id: 1, label: "Earning", value: "20 Tokens", icon: Vec1 },
    { id: 2, label: "Course Completion", value: "75%", icon: Vec2 },
    { id: 3, label: "Task Completion", value: "20%", icon: Vec3 }
  ];
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-white flex-1">
        {/* Header start */}
        <div className={styles3.wrapper}>
          <div className={styles3.content}>
            <div className={styles3.profileBut}>
              <Grid.Container justify="flex-end">
                <Grid>
                  <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                      <Avatar
                        bordered
                        size="lg"
                        text="T"
                        color="secondary"
                        textColor="white"
                      />
                    </Dropdown.Trigger>
                    <Dropdown.Menu
                      color="secondary"
                      aria-label="Avatar Actions"
                    >
                      <Dropdown.Item
                        key="profile"
                        css={{
                          height: "$18"
                        }}
                      >
                        <Text b color="inherit" css={{ d: "flex" }}>
                          wallet id:
                        </Text>
                        <Text
                          b
                          color="inherit"
                          css={{
                            d: "flex",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {user.address}
                        </Text>
                      </Dropdown.Item>
                      <Dropdown.Item key="profilePage" withDivider>
                        <Link href="/" color="secondary">
                          Public Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="analytics" withDivider>
                        <Link href="/" color="secondary">
                          Switch to Learner Mode
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="help_and_feedback" withDivider>
                        <Link href="/" color="secondary">
                          Profile Setting
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="logout" color="error" withDivider>
                        <button onClick={() => signOut({ redirect: "/" })}>
                          Log out
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
              </Grid.Container>
            </div>
          </div>
        </div>
        {/* Header Stop */}
        <div className={styles2.container}>
          <h1 className={styles.welcome}>Hello Educator!</h1>
          <div className={styles.summary}>
            <h3 className={styles.summaryTitle}>Summary</h3>
            <div className={styles.sumInfo}>
              {menuItems.map((menu) => {
                return (
                  <div className={styles.Info} key={menu.label}>
                    <div className={styles.content}>
                      <p className={styles.con1}>{menu.label}</p>
                      <h2 className={styles.con2}>{menu.value}</h2>
                    </div>
                    <div className={styles.imageContainer}>
                      <Image
                        src={menu.icon}
                        alt="vector"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: { user: session.user }
  };
}
export default dashboard;
