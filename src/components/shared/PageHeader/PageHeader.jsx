import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './PageHeader.module.scss'

function PageHeader() {
  return (
    <nav className={Styles['header']}>
        <Link to="/profile" className={Styles['header__link']}>PROFILE</Link>
        <Link to="/best" className={Styles['header__link']}>BEST</Link>
        <Link to="/explore" className={Styles['header__link']}>EXPLORE</Link>
        <Link to="/genres" className={Styles['header__link']}>GENRES</Link>
    </nav>
  )
}

export default PageHeader