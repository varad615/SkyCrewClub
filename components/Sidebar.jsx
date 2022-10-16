import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { RiDashboardFill, RiCompassFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import LogoIcon from "../public/Logo.png";
import Favi from "../public/Favi.png";
import { CollapsIcon } from "./icons";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { id: 1, label: "Dashboard", icon: RiDashboardFill, link: "/dashboard" },
  { id: 2, label: "Courses", icon: RiCompassFill, link: "/posts" },
  { id: 3, label: "Community", icon: BsPeopleFill, link: "/users" },
  { id: 4, label: "Analytics", icon: IoAnalytics, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClass = classNames(
    "h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col border-r border-gray-100",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-[#EFF2FE]  text-[#acb0b8] absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      " flex items-center cursor-pointer hover:bg-[#EFF2FE] hover:text-[#5046E5] bg-transparent text-[#acb0b8] rounded w-full overflow-hidden whitespace-nowrap m-1",
      {
        ["bg-[#EFF2FE] text-[#5046E5]"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClass}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between relative">
          <div className="flex items-center">
            {/* swap logo image when sidebar is closed or active */}
            {toggleCollapse ? (
              <Image
                src={Favi}
                height={50}
                width={50}
                className={classNames("object-contain cursor-pointer", {
                  hidden: !toggleCollapse,
                })}
              />
            ) : (
              <Image
                src={LogoIcon}
                height={50}
                width={100}
                className={classNames("object-contain cursor-pointer", {
                  hidden: toggleCollapse,
                })}
              />
            )}
          </div>
          {/* close/open sidebar button */}
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        {/* NavLinks */}
        <div className="flex flex-col items-start mt-10">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className=" flex py-4  px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem", height: "1.5rem" }}>
                      <Icon size={20} />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
