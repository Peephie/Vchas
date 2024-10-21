import { forwardRef } from 'react'
import { Link } from "react-router-dom";
import GmailSvg from '../assets/vectors/Contacts/contacts_vector-gmail.svg';
import InstagramSvg from '../assets/vectors/Contacts/contacts_vector-instagram.svg';
import TelegramSvg from '../assets/vectors/Contacts/contacts_vector-telegram.svg';
import BorderedButton from './BorderedButton';

const NavbarContacts = forwardRef(({ theme, onClose }, ref) => {
  const linkDefaultText = 'font-raleway group-hover:font-raleway-italic font-medium group-hover:font-semibold transition-all duration-500 text-3xl uppercase ';
  const linkDefaultVectors = 'transition-colors duration-500 mx-auto ';
  const linkVariantsText = {
    base: linkDefaultText + 'text-coral group-hover:text-cherry',
    inverse: linkDefaultText + 'text-peach group-hover:text-beige',
  };
  const linkVariantsVectors = {
    base: linkDefaultVectors + 'fill-coral group-hover:fill-cherry',
    inverse: linkDefaultVectors + 'fill-peach group-hover:fill-beige',
  };

  const textColor = theme !== 'variant-beige-to-cherry' ? theme : 'variant-inverse';
  const linkVariant = theme === 'variant-beige-to-cherry' || theme === 'variant-inverse' ? 'inverse' : 'base';

  return (
    <div className='flex flex-col flex-nowrap justify-around items-center h-5/6' ref={ref}>
      <div className='text-center'>
        <h1 className={`${textColor} uppercase text-5xl font-cormorant-infant-bold mb-5`}>КОНТАКТИ</h1>
        <p className={`${textColor} text-2xl font-light font-raleway-italic`}>Ми на звʼязку у будь-якому зручному місці</p>
      </div>
      <div className='flex flex-row flex-nowrap justify-between items-center w-3/4 max-w-screen-lg text-center gap'>
      
        <a className='group basis-1/3' href='' target='_blank'>
          <div className='mb-10'><GmailSvg class={linkVariantsVectors[linkVariant]} /></div>
          <span className={linkVariantsText[linkVariant]}>Gmail</span>
        </a>
        <a className='group basis-1/3' href='' target='_blank'>
        <div className='mb-10'><InstagramSvg class={linkVariantsVectors[linkVariant]} /></div>
          <span className={linkVariantsText[linkVariant]}>Instagram</span>
        </a>
        <a className='group basis-1/3' href='' target='_blank'>
          <div className='mb-10'><TelegramSvg class={linkVariantsVectors[linkVariant]} /></div>
          <span className={linkVariantsText[linkVariant]}>Telegram</span>
        </a>
      </div>
	  <Link onClick={onClose} to='/'>
	  	<BorderedButton theme={theme} label='НА ГОЛОВНУ'/>
	  </Link>
    </div>
  )
});

NavbarContacts.displayName = 'NavbarContacts';

export default NavbarContacts