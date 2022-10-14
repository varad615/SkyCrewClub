import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const styles = {
    container: "px-8 w-full mx-auto max-w-screen-lg 2xl:max-w-screen-2xl py-12"

  };
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-white flex-1">
        <Header />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
