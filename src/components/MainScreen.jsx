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
        textColor='text-cherry'
        linkValue='#'
        bgImage='ink-image'
      />
      <MainHero 
        heading='Переглянути Всі Слова'
        subheading='ідеально для тих, кого цікавить навчання'
        textColor='text-beige'
        linkValue='#'
        bgImage='paper-image'
      />
    </div>
	)
}

export default MainScreen