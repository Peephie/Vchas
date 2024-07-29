import React, {useContext} from 'react';
import Links from './NavLinks';
import { NavBarContext } from '../contexts/NavBarContext';

const NavBar = () => {
  const { navbarClass } = useContext(NavBarContext);
	const navbarStorage = [
		{label: 'Слова', value:'#'},
		{label: 'Контакти', value:'#'},
		{label: 'Пошук', value:'#'}
	];

	return (
    <div className={`${navbarClass} flex justify-between px-16 py-10`}>
      <span className='text-cherry italic text-4xl'>ВЧАС</span>
      <Links links={navbarStorage}/>
    </div>
	)
}

export default NavBar