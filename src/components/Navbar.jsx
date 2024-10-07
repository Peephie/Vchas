import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import { Link } from "react-router-dom";
import anime from 'animejs';
import Links from './NavbarLinks';
import Modal from './NavbarModal';
import Search from './NavbarSearch';
import Contacts from './NavbarContacts';


const NavBar = () => {
  const navbarStorage = [
    {label: 'Слова', value:'/words'},
    {label: 'Випадкове', value:'/randomWords'},
  ];

  const { theme } = useContext(ThemeContext);
  const textColorLogoNav = theme !== 'variant-beige-to-cherry' ? theme : 'text-cherry';
  const textColorNavBar = theme !== 'variant-beige-to-cherry' ? theme : 'variant-inverse';

  const [searchVisible, setSearchVisible] = useState(false);
  const [contactsVisible, setContactsVisible] = useState(false);
  
  const searchRef = useRef(null);
  const contactsRef = useRef(null);

  const toggleContacts = () => {
    if (contactsVisible) {
      anime({
        targets: contactsRef.current,
        translateY: '-100%',
        duration: 500,
        easing: 'easeInOutQuad',
        complete: () => setContactsVisible(false),
      });
    } else {
      setContactsVisible(true);
    }
  };

  const toggleSearch = () => {
    console.log('%csrc/components/Navbar.jsx:27 object', 'color: #007acc;', 'HERE');
    if (searchVisible) {
      anime({
        targets: searchRef.current,
        translateY: '-100%',
        duration: 500,
        easing: 'easeInOutQuad',
        complete: () => setSearchVisible(false),
      });
    } else {
      setSearchVisible(true);
    }
  };

  useEffect(() => {
    if (contactsVisible) {
      anime({
        targets: contactsRef.current,
        translateY: '-100%',
        duration: 0,
        complete: () => {
          anime({
            targets: contactsRef.current,
            translateY: '0%', 
            duration: 500,
            easing: 'easeInOutQuad',
          });
        },
      });
    }
  }, [contactsVisible]);

  useEffect(() => {
    if (searchVisible) {
      anime({
        targets: searchRef.current,
        translateY: '-100%',
        duration: 0, 
        complete: () => {
          anime({
            targets: searchRef.current,
            translateY: '0%', 
            duration: 500,
            easing: 'easeInOutQuad',
          });
        },
      });
    }
  }, [searchVisible]);
  
  return (
    <nav className={`${theme} flex justify-between px-16 py-10`}>
      <Link className={`${textColorLogoNav} italic text-4xl cursor-pointer`} to='/'>
        ВЧАС
      </Link>
      <div className="flex justify-between gap-x-5">
        <Links links={navbarStorage} className={theme}/>
        <span className={`${textColorNavBar}`}>/</span>
        <div className={`${textColorNavBar} cursor-pointer`} onClick={toggleContacts}>
          Контакти
        </div>
        <span className={`${textColorNavBar}`}>/</span>
        <div className={`${textColorNavBar} cursor-pointer`} onClick={toggleSearch}>
          Пошук
        </div>
      </div>

      {contactsVisible && 
        <Modal theme={theme} onClose={toggleContacts} ref={contactsRef}>
          <Contacts></Contacts>
        </Modal>
      }
      {searchVisible && 
        <Modal theme={theme} onClose={toggleSearch} ref={searchRef}>
          <Search></Search>
        </Modal>
      }
    </nav>
  )
}

export default NavBar