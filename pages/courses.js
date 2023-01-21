import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import styles from '../styles/Course.module.css'

const fs = require('fs-web');

export default function Courses() {
  const [coursesList, setCourses] = useState([])

  useEffect(() => {
    // read the .json file from the data directory
    const filePath = path.join(process.cwd(), 'data', 'courses.json')
    const data = JSON.parse(fs.readFileSync(filePath))
    setCourses(data)
  }, [])

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {coursesList.map(course => (
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

