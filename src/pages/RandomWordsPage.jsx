import React, { useContext, useEffect, useMemo } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import WordsScrollView from '../components/WordsScrollView';
import allWords from '../assets/data/words.json';

const RandomWordsPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const randomWords = useMemo(() => randomizeArray(allWords), []);

  useEffect(() => {
    const theme = 'variant-inverse';
    setTheme(theme);
  }, [setTheme]);

  function randomizeArray(array) {
    const newArray = [...array];
    let currentIndex = newArray.length;
  
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]
      ];
    }
  
    return newArray;
  }
  
  return (
    <div className={`${theme} flex flex-col max-h-full px-16`}>
      <h1 className='font-cormorant-infant-bold text-5xl text-center mt-5 mb-8 uppercase'>випадкове слово</h1>
      <WordsScrollView words={randomWords}/>
    </div>
  )
}

export default RandomWordsPage