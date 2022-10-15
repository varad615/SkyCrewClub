import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoArrowBackOutline, IoPeople } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import LogoIcon from "../../public/Logo.png";
import Favi from "../../public/Favi.png";
import { CollapsIcon } from "../icons";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { id: 1, label: "Back to Dashboard", icon: IoArrowBackOutline, link: "/dashboard" },
  { id: 2, label: "Details", icon: FaPen, link: "/create-course" },
  { id: 3, label: "Curriculum", icon: RiBarChartBoxLine, link: "/curriculum" },
  { id: 4, label: "Students", icon: IoPeople, link: "/students-enrolled" },
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
    "h-screen px-4 pt-8 pb-4 bg-slate-50 flex justify-between flex-col border-r border-gray-100",
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
      " flex items-center cursor-pointer hover:bg-[#EFF2FE] hover:text-[#5046E5] bg-transparent text-[#acb0b8] rounded w-full overflow-hidden whitespace-nowrap p-1",
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
                alt="reverse icon"
                height={50}
                width={50}
                className={classNames("object-contain cursor-pointer", {
                  hidden: !toggleCollapse,
                })}
              />
            ) : (
              <Image
                src={LogoIcon}
                alt="Logo"
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
              <div className={classes} key={menu.lable}>
                <Link href={menu.link} >
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
