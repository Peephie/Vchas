import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import allWords from '../assets/data/words.json';
import Card from '../components/Card';
import { PiArrowDownThin } from "react-icons/pi";
import Filter from '../components/Filter';

const AllWordsPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    const theme = 'variant-base';
    setTheme(theme);
  }, [setTheme]);

  const uniqueTags = [];
  const [groupedWords, setGroupedWords] = useState(getGroupedWords(allWords));

  function getGroupedWords(words) {
    let groupedWords = [];
    let currentLetter = '';
    let index = 0;
    let countBySameWord = 0;

    for (const word of words) {
      if (uniqueTags.indexOf(word.tags) == -1) {
        uniqueTags.push(word.tags);
      }
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
    let additionalLetterClasses = isPrimary ? 'text-clamp-xl' : 'opacity-[.08] text-clamp-xxl';
    
    return <>
      <div className={`${additionalClasses} flex items-center leading-none justify-center aspect-card variant-inverse text-center container-type-inline`}>
        <span className={`${additionalLetterClasses}`}>{letter}</span> 
      </div>
    </>
  }

  function getWordCard(word) {
    return <div key={word.id} className='aspect-card container-type-inline'>
      <Card word={word} />
    </div>
  }

  function onFilterChange(filters) {
    if (!filters || filters.length === 0) {
      setGroupedWords(getGroupedWords([...allWords]));
      return;
    }
  
    const filteredWords = allWords.filter((word) => filters.indexOf(word.tags) !== -1);
    setGroupedWords(getGroupedWords(filteredWords));
  }

  return (
    <div className={`${theme}`}>
      <div className='w-max my-0 mx-auto text-center'>
        <h1 className='uppercase font-cormorant-infant-bold text-5xl mb-5'>
          Всі Слова
        </h1>
        <span className='lowercase font-raleway-italic text-2xl'>
          Тут можна ознайомитись детально з кожним словом
        </span>
        <PiArrowDownThin className='mx-auto h-16 w-auto mt-14'/>
      </div>
      <div className='px-16 py-5 relative'>
        <div className={'flex max-w-[1440px] justify-between text-coral mx-auto mb-5'}>
          <Filter label='Фільтр' options={uniqueTags} onFilterChange={onFilterChange} />
          <div className='border border-coral px-16 py-3 font-cormorant-infant-medium-italic uppercase'>
            Картки
          </div>
        </div>
        <div className='grid grid-cols-2 gap gap-x-5 gap-y-6 max-w-[1440px] mx-auto'>
          {[...groupedWords].map((word) => {
            return word
          })}
        </div>
      </div>
    </div>
  )
}

export default AllWordsPage