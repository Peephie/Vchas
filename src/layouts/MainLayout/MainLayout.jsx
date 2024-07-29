import React from 'react'
// import NavBar from '../../components/Navbar'
import { Outlet } from "react-router-dom"
import { NavBarProvider } from '../../contexts/NavBarContext'
import './MainLayout.css';
import NavBar from '../../components/Navbar';

const MainLayout = () => {
  return (
    <NavBarProvider>
      <div className='auto-grid'>
        <NavBar/>
        <div className='flex flex-col justify-center'>
          <Outlet />
        </div>
      </div>
    </NavBarProvider>
  )
}

export default MainLayout