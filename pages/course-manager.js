import Link from "next/link";
import React from "react";
import Layout from "../components/Dashboard/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import CreateCourse from "../components/CourseEditor/CreateCourseLayout";

const posts = ({children}) => {
  const styles = {
    pageTitle:
      "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl",
    pageHead: "flex items-center justify-between",
    countOfCourse:
      "text-x rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase text-white",
    subTitle: "mt-1 text-small text-gray-500",
    midBar: "mt-8 flex items-center justify-between",
    searchBar: "relative mt-1 w-full max-w-md rounded-md shadow-sm",
    icon: "pointer-event-none absolute inset-y-0 left-0 flex items-center pl-3",
    inputBar:
      "block w-full rounded-md border border-gray-900 pl-10 py-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
    createBut:
      "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  };
  return (
    <Layout>
      {/* page title */}
      <h2 className={styles.pageTitle}>
        <span className={styles.pageHead}>
          Interactive Courses
          <span className={styles.countOfCourse}> 1 Created</span>
        </span>
      </h2>
      <p className={styles.subTitle}>
        View and edit the interactive courses you have created
      </p>

      {/* search bar and create course button */}
      <div className={styles.midBar}>
        {/* search bar */}
        <div className={styles.searchBar}>
          <div className={styles.icon}>
            <AiOutlineSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="search"
            className={styles.inputBar}
            placeholder="Search course by name.."
            autoComplete="new-password"
          />
        </div>
        {/* create course button */}
        <Link href="/create-course">
          <a className={styles.createBut}>Create Course</a>
        </Link>
      </div>

      <div className="mt-10">course card</div>
    </Layout>
  );
};

export default posts;
