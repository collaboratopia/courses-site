import React from 'react';
import styles from './Course.module.css'

export default function Course() {
  return (
    <div className={styles.course}>
      <h1>{course.title}</h1>
      <p className={styles.description}>{course.description}</p>
      <div>
        <h2 className={styles.lesson}>Lessons</h2>
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

