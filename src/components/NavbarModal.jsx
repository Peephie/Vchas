import React, { forwardRef } from 'react'
import { Link } from "react-router-dom";

const NavbarModal = forwardRef(({ children, ...props }, ref) => {
  const theme = props.theme;
  const onClose = props.onClose;
  
  const colorBackground = theme !== 'variant-beige-to-cherry' ? theme : 'variant-inverse';
  const colorLogo = colorBackground !== 'variant-inverse' ? 'text-cherry' : 'text-beige';
  
  return (
    <div className={`${colorBackground} top-0 left-0 h-screen w-screen z-50 fixed`} ref={ref}>
      <div className='flex justify-between px-16 py-10'>
        <Link className={`${colorLogo} italic text-4xl`} to='/'>ВЧАС</Link>
        <div className='cursor-pointer text-4xl' onClick={onClose}>X</div>
      </div>

      {React.cloneElement(children, { ...props })}
    </div>
  )
});

NavbarModal.displayName = 'NavbarModal';


export default NavbarModal