import React, {useContext} from 'react';
import MainHero from './MainHero'
import { ThemeContext } from '../assets/hooks/ThemeContext';

const MainScreen = () => {
  const { theme } = useContext(ThemeContext);

	return (
    <div className={`${theme} grid grid-cols-50/50`}>
      <MainHero 
        heading='Випадкове Слово'
        subheading='ідеально для тих, кого цікавить нове'
        color='cherry'
        linkValue='#'
        bgImage='ink-image'
        link='/randomWords'
      />
      <MainHero 
        heading='Всі Слова'
        subheading='ідеально для тих, кого цікавить навчання'
        color='beige'
        linkValue='#'
        bgImage='paper-image'
        link='/words'
      />
    </div>
	)
}

export default MainScreen