import React from 'react'
import Sidebar from "../CourseEditor/CreateSidebar"
import Header from '../Dashboard/Header';

const CreateCourseLayout = ({children}) => {
    const styles = {
        container: "px-8 w-full mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-12 bg-gradient-to-r from-[#FFFFFF] to-[#EFF2FE] "
      };
    return (
        <div className="h-screen flex flex-row justify-start">
          <Sidebar />
          <div className="bg-white flex-1">
            <Header />
            <div className={styles.container}>{children}</div>
          </div>
        </div>
  )
}

export default CreateCourseLayout;