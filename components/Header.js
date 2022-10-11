const Header = () => {
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
        {/* <div className={styles.profileBut}>T</div> */}
      </div>
    </div>
  );
};

export default Header;
