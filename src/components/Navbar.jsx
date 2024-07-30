import React, {useContext} from 'react';
import Links from './NavLinks';
import { ThemeContext } from '../assets/hooks/ThemeContext';

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const navbarStorage = [
    {label: 'Слова', value:'#'},
    {label: 'Контакти', value:'#'},
    {label: 'Пошук', value:'#'}
  ];

  return (
    <div className={`flex justify-between px-16 py-10  ${theme}`}>
      <span className='italic text-4xl'>ВЧАС</span>
      <Links links={navbarStorage} className={theme}/>
    </div>
  )
}

export default NavBar