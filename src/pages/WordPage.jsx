import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import words from '../assets/data/words.json';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import { PiArrowDownLeftThin } from 'react-icons/pi';

const WordPage = () => {
  const { id } = useParams();
  const word = words.find((word) => word.id == id);
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = 'variant-inverse';
    setTheme(theme);
  }, [setTheme]);
  const { theme } = useContext(ThemeContext);
  const brandLetter = word?.primaryWord?.substring(0, 1) ?? '?';

  return (
    <div data-letter={brandLetter} className={`${theme} bg-letter max-auto h-full px-16 z-0 text-4xl font-raleway`} >
      <div className={`z-30 flex flex-col justify-between relative h-full pb-16`}>
        <div className='w-fit flex'>
          <PiArrowDownLeftThin className='text-peach'/>
          <span className='text-2xl  text-peach divide-y-2 divide-peach'>
            <span>Назад</span>
            <div className="mt-1"></div>
          </span>
        </div>
        <div className='w-1/2'>
          <div className='text-peach font-raleway-italic text-2xl mb-2.5'>
            {word.tags}
          </div>
          <h1 className='font-cormorant-infant-medium-italic uppercase w-4/5'>
            {word.primaryWord} &#91; {word.relatedWord} &#93; —
          </h1>
          <h2 className='lowercase font-raleway-italic'>
            {word.meaning}
          </h2>
          <hr className='my-10'/> 
          <h3 className='w-4/5'>
            {word.example}
          </h3>
        </div>
        <div className='flex justify-end '>
          <div className='w-28 text-center px-4 py divide-y-2 divide-peach'>
            <a className='font-cormorant-infant-bold-italic text-6xl text-peach'>
              {brandLetter}
            </a>
            <div/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordPage