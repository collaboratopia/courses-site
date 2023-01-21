import fs from 'fs'
import path from 'path'

export async function getServerSideProps({ params }) {
  // read the .json file from the data directory
  const filePath = path.join(process.cwd(), 'data', `course-${params.id}.json`)
  const data = JSON.parse(fs.readFileSync(filePath))
  return { props: { course: data } }
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
