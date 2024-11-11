import { useState, useEffect, useContext, useRef } from 'react';
import Filter from '../components/WordsFilter';
import BorderedButton from './BorderedButton';


const WordsUtilityBar = ({ theme, filterOptions, onFilterChange, onViewChange }) => {
  const utilityBarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyTop = utilityBarRef.current.getBoundingClientRect().top;
      setIsSticky(stickyTop <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`max-w-[1440px] pb-8 grid grid-cols-3 gap-3 text-coral mx-auto mb-5 sticky top-0 transition-all duration-200 z-10 ${isSticky ? 'max-w-full px-4 py-8' : ''} ${theme}`} ref={utilityBarRef}>
      <div className='flex align-center'><Filter label='Фільтр' options={filterOptions} onFilterChange={onFilterChange} /></div>
      <h1 className={`${theme} text-center uppercase font-cormorant-infant-bold text-5xl`}>Всі Слова</h1>
      <div className='flex flex-row-reverse'><div onClick={onViewChange}> <BorderedButton label={'Картки'} variant={'small'} /></div></div>
    </div>
  )
}

export default WordsUtilityBar