import { Dropdown, Avatar, Text, Grid, User, Link } from "@nextui-org/react";
import { getSession, signOut } from "next-auth/react";

function Header({ user }) {
  const styles = {
    wrapper: "flex p-5 bg-white",
    content: "w-full flex-1 flex justify-end ",
    logoContainer: "flex items-center flex-start",
    logo: "object-contain cursor-pointer",
    profileBut: "bg-black text-white py-2 px-4 rounded-full cursor-pointer"
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.profileBut}>T</div>
        <Grid.Container justify="flex-start" gap={2}>
          <Grid>
            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  size="lg"
                  as="button"
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {user}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" color="error" withDivider>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <Grid>
            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <User
                  bordered
                  as="button"
                  size="lg"
                  color="primary"
                  name="Tony Reichert"
                  description="@tonyreichert"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="primary" aria-label="User Actions">
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>

                <Dropdown.Item key="logout" color="error" withDivider>
                  <Link onClick={() => signOut({ redirect: "/signin" })}>
                    Log Out
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
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
