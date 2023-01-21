import fs from 'fs'
import path from 'path'
import styles from '../../styles/Course.module.css'

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', "template.json")
  const course = JSON.parse(fs.readFileSync(filePath))
  const paths = course.map(course => `/course/${course.title.replace(" ","-")}`);
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    props: {
      course: {"title", "description"}
    }
  }
}


export default function Course({ course }) {
  return (
    <div>
    <h1 className={styles.course}>{course.title}</h1>
      <p className={styles.course}>{course.description}</p>
      <p className={styles.course}>Hello World!</p>
       <div>
        <h2 className={styles.lesson}>Lessons</h2>
        {/* {course.lessons.map(lesson => (
          <div key={lesson.title}>
            <h3>{lesson.title}</h3>
            <span>Duration: {lesson.duration}</span>
          </div>
        ))} */}
      </div>
    </div>
  )
}
