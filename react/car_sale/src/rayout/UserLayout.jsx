import React from 'react'
import styles from './UserLayout.module.css'
import HeadMenu from './HeadMenu'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_div}>
        <HeadMenu/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout