import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../assets/hooks/ThemeContext'
import MainScreen from '../components/MainScreen'

const HomePage = () => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = 'variant-beige-to-cherry';
    setTheme(theme);
  }, [setTheme]);

  return (
    <div className='scrollbar-hide-active'>
      <MainScreen />
    </div>
  )
}

export default HomePage