import React, { useContext, useRef } from 'react';
import anime from 'animejs';
import MainHero from './MainHero'
import { ThemeContext } from '../assets/hooks/ThemeContext';

const MainScreen = () => {
  const randomWordsRef = useRef(null);
  const allWordsRef = useRef(null);
  const heroes = [randomWordsRef, allWordsRef];
  const { theme } = useContext(ThemeContext);

  addHoverListeners();

  function addHoverListeners() {
    
    heroes.forEach((heroRef) => {
      heroRef?.current?.addEventListener('mouseenter', ({target}) => onEnterHero(target), false);
      heroRef?.current?.addEventListener('mouseleave', ({target}) => onLeaveHero(target), false);
    });
  }

  function onEnterHero(el) {
    scaleHero(el, 1.1, 800, 200);
  }
  
  function onLeaveHero(el) {
    scaleHero(el, 1.0, 600, 100);
  }

  function scaleHero(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
      targets: el,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }

	return (
    <div className={`${theme} grid grid-cols-50/50`}>
      <MainHero 
        heading='Випадкове Слово'
        subheading='ідеально для тих, кого цікавить нове'
        color='cherry'
        linkValue='#'
        bgImage='ink-image'
        link='/randomWords'
        ref={randomWordsRef}
      />
      <MainHero 
        heading='Всі Слова'
        subheading='ідеально для тих, кого цікавить навчання'
        color='beige'
        linkValue='#'
        bgImage='paper-image'
        link='/words'
        ref={allWordsRef}
      />
    </div>
	)
}

export default MainScreen