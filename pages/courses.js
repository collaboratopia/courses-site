import fs from 'fs'
import path from 'path'

export async function getServerSideProps(context) {
  // read the .json file from the data directory
  const filePath = path.join(process.cwd(), 'data', 'course.json')
  const data = JSON.parse(fs.readFileSync(filePath))
  return { props: { course: data } }
}

export default function Courses({ courses }) {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link href={`/course?id=${course.id}`} as={`/courses/${course.id}`}>
              <a>{course.title}</a>
            </Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
