import React from 'react'
import styles from '../../styles/Courses.module.css'
import Image from 'next/image'
import {CourseData} from "../../CourseCardData/Course_data"
import CourseCard from '../../components/Courses/CourseCard'
import Navbar from '../../components/Courses/Navbar'


function courses() {

  return (
    <>
    <Navbar />
    <div className={styles.courses_page__hldr}>
      <div className={styles.main}>
        <h3>Courses</h3>
        <div className={styles.course__cards}>
                {CourseData.slice(0,7).map(item =>{
                  return(
                    <CourseCard 
                    key={item.title}
                      link={item.link}
                      img={item.img}
                      title={item.title}
                      desc={item.desc}
                    />
                  )
                })}
        </div>
      </div>
    </div>
    </>
  )
}

export default courses