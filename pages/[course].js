import fs from 'fs'
import path from 'path'

export async function getServerSideProps() {
    // read the .json file from the data directory
    const filePath = path.join(process.cwd(), 'data', "course.json")
    const data = JSON.parse(fs.readFileSync(filePath))
    // paths will be the array of course ids
    const paths = data.map(course => `/courses/${course.id}`)
    return {
        paths,
        fallback: false
    }
}

export default function Course({ course }) {
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div>
        <h2>Lessons</h2>
        {course.lessons.map(lesson => (
          <div key={lesson.title}>
            <h3>{lesson.title}</h3>
            <span>Duration: {lesson.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
