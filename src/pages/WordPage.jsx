import React, {useContext, useEffect} from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import '../assets/styles/WordPage.css';

const WordPage = ({
  word,
  variant = 'variant-inverse'
}) => {
  word = {
    primaryWord: 'Бесіда',
    relatedWord: 'Чат',
    meaning: 'Місце для розмов',
    example: 'Це варто написати до загальної бесіди'
  }

  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = 'variant-inverse';
    setTheme(theme);
  }, [setTheme]);
  const brandLetter = word?.primaryWord?.substring(0, 1) ?? '?';

  return (
    <div className={`${variant} bg-letter max-auto h-full p-16 z-0`} data-letter={brandLetter}>
      <div className={`z-30 flex flex-col justify-between relative`}>
        <span>
          Назад
        </span>
        <div className='w-1/2'>
          <h1 className='font-cormorant-infant-medium uppercase'>
            {word.primaryWord} &#91; {word.relatedWord} &#93; -
          </h1>
          <h2>
            {word.meaning}
          </h2>
          <hr/>
          <h3>
            {word.example}
          </h3>
        </div>
        <div className='flex justify-end'>
          <a>
            {brandLetter}
          </a>
        </div>
      </div>
    </div>
  )
}

export default WordPage