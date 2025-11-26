import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className="px-4 md:px-8 lg:16px xl:32px 2xl:64px">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
