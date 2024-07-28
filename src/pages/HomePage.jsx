import React, { useEffect, useContext } from 'react'
import { NavBarContext } from '../contexts/NavBarContext';
import MainScreen from '../components/MainScreen'

const HomePage = () => {
  const { setNavBarClass } = useContext(NavBarContext);

  useEffect(() => {
    const navBarClass = 'bg-gradient-to-r from-beige from-50% to-cherry to-50%';
    setNavBarClass(navBarClass);
  }, [setNavBarClass]);

  return (
    <>
      <MainScreen />
    </>
  )
}

export default HomePage