import React from 'react'
import styles from "./header.module.css"
const heading = () => {
  return (
    <div className={styles.header}>
      <a href='#'>home</a>
      <a href='#'>settingss</a>
      <button className={styles.btn}>login</button>
    </div>
  )
}

export default heading
