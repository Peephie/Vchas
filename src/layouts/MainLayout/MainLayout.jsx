import React from 'react'
import { Outlet } from "react-router-dom"
import { ThemeProvider } from '../../assets/hooks/ThemeContext';
import NavBar from '../../components/Navbar';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <ThemeProvider>
      <div className='auto-grid'>
        <NavBar/>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout