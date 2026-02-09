import React from 'react'
import Styles from './Template.module.scss'
import PageHeader from '../../components/shared/PageHeader/PageHeader'
import Copyrights from '../../components/shared/Copyrights/Copyrights'
import { Outlet } from 'react-router-dom'
function Template() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <Copyrights />
      
      </>
    
  )
}

export default Template