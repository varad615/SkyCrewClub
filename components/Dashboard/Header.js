import { Link, Dropdown, Avatar, Text, Grid } from "@nextui-org/react";
import { getSession, signOut } from "next-auth/react";

function Header({ user }) {
  const styles = {
    wrapper: "flex p-5 drop-shadow-md bg-white",
    content: "w-full flex-1 flex justify-end ",
    profileBut: "cursor-pointer"
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.profileBut}>
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
                    <Text b color="inherit" css={{ d: "flex" }}></Text>
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
  );
}
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
export default Header;
