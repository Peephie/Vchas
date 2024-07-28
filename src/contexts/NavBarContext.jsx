import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navbarClass, setNavBarClass] = useState('');

  return (
    <NavBarContext.Provider value={{ navbarClass, setNavBarClass }}>
      {children}
    </NavBarContext.Provider>
  );
};