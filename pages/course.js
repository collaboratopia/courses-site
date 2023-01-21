import fs from 'fs'
import path from 'path'

export async function getServerSideProps({ params }) {
  // read the .json file from the data directory
  const filePath = path.join(process.cwd(), 'data', `course-${params.id}.json`)
  const data = JSON.parse(fs.readFileSync(filePath))
  return { props: { course: data } }
}

export default function
