import { useEffect, useContext } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import words from '../assets/data/words.json';
import Card from '../components/Card';

const AllWordsPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    const theme = 'variant-base';
    setTheme(theme);
  }, [setTheme]);

  return (
  <div className={`${theme} grid grid-cols-2 gap gap-5 p-16`}>
    {words.map((word) => {
      return <div key={word.id} className='aspect-card'>
        <Card word={word} />
      </div>
    })}
  </div>
  )
}

export default AllWordsPage