import React from 'react';
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
  const brandLetter = word?.primaryWord?.substring(0, 1) ?? '?';

  function getBrandLetterFragment() {
    console.log('%c brandLetter', 'color: #007acc;', brandLetter);
    return(
      // <div className={`after:content-['T'] after:text-blue-900 after:absolute after:h-full after:w-full after:top-0 after:right-0 after:h-4/5 `}>
      <div className={`text-peach`} data-letter={brandLetter}>
        {/* {brandLetter} */}
      </div>
    )
  }

  return (
    // <div className={`${variant} h-full p-16 flex flex-col justify-between min-h-screen`}>
    // <div className={`${variant} max-auto h-full p-16 flex flex-col justify-between relative`}>
    <div className={`${variant} bg-letter max-auto h-full p-16 z-0`} data-letter={brandLetter}>
      <div className={`z-30 flex flex-col justify-between relative`}>
        {getBrandLetterFragment()}
        <span>Назад</span>
        <div className='w-1/2'>
          <h1 className='font-cormorant-infant-medium uppercase'>
            {word.primaryWord} &#91; {word.relatedWord} 	&#93; -
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