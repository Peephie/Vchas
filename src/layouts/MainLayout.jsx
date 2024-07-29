import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from "react-router-dom"
import { NavBarProvider } from '../contexts/NavBarContext'

const MainLayout = () => {
  return (
    <NavBarProvider>
      <div className='grid auto-rows-max'>
        <NavBar />
        <Outlet />
      </div>
    </NavBarProvider>
  )
}

export default MainLayout