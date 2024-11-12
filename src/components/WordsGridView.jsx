import React, { useState } from 'react';
import Card from './Card';

const WordsGridView = ({ words }) => {
  const retrievedWords = [...words];
  const cards = getCards(retrievedWords);

  function getCards(words) {
    let groupedWords = [];
    let currentLetter = '';
    let index = 0;
    let countBySameWord = 0;

    for (const word of words) {
      const wordLetter = word.primaryWord.substring(0, 1);
    
      if (currentLetter != wordLetter) {
        countBySameWord = 0;
        currentLetter = wordLetter;
        groupedWords.push(getLetterCard(wordLetter, true));
      }
      
      groupedWords.push(getWordCard(word));
      countBySameWord++;
    
      const nextLetter = words[index + 1]?.primaryWord?.substring(0, 1);
      if ((!nextLetter || currentLetter != nextLetter) && countBySameWord % 2 === 0) {
        groupedWords.push(getLetterCard(currentLetter, false));
      }
      index++;
    }

    return groupedWords;
  }

  function getLetterCard(letter, isPrimary) {
    let additionalClasses = isPrimary ? 'variant-inverse font-cormorant-infant-italic' : 'bg-peach text-cherry font-snell';
    let additionalLetterClasses = isPrimary ? 'text-clamp-xl' : 'opacity-[.08] text-clamp-xxl pt-4 pr-12';
    
    return <>
      <div className={`${additionalClasses} flex items-center leading-[0] select-none justify-center aspect-card variant-inverse text-center container-type-inline`}>
        <span className={`${additionalLetterClasses}`}>{letter}</span> 
      </div>
    </>
  }

  function getWordCard(word) {
    return <div key={word.id} className='aspect-card container-type-inline'>
      <Card word={word} />
    </div>
  }

  return (
    <div className='grid grid-cols-2 gap gap-x-5 gap-y-6 max-w-[1440px] mx-auto overflow-y'>
      {[cards].map((card) => {
        return card
      })}
    </div>
  )
}

export default WordsGridView