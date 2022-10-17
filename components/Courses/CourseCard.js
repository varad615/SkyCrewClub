import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Courses.module.css'

const CourseCard = ({link, img, title, desc}) => {
  return (
    <div className={styles.course_card}>
  
         <Link 
            href={link}
          >
            <a>
              <div className={styles.course_card__hldr}>
                    <Image 
                        src={img}
                        height={150}
                        width={340}
                        className={styles.course_card__image}
                    />
                  <div className={styles.card_content__hldr}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <button className={styles.course_content__but}>Enroll</button>
                  </div>
              </div>
            </a>
          </Link>
    </div>
  )
}

export default CourseCard