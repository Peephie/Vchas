import React, {useContext, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigateTo = useNavigate();

  function goBack() {
    navigateTo(-1);
  }

  return (
    <div data-letter={brandLetter} className={`${theme} bg-letter max-auto h-full px-16 z-0 text-4xl font-raleway`} >
      <div className={`z-30 flex flex-col justify-between relative h-full pb-16`}>
        <div className='w-fit flex cursor-pointer' onClick={goBack}>
          <PiArrowDownLeftThin className='text-peach'/>
          <span className='text-2xl text-peach divide-y-2 divide-peach'>
            <span >Назад</span>
            <div className="mt-1"></div>
          </span>
        </div>
        <div className='w-1/2'>
          <div className='text-peach font-raleway-italic text-2xl mb-2.5 lowercase'>
            {word.tags}
          </div>
          <h1 className='font-cormorant-infant-medium uppercase w-4/5'>
            <span className='font-cormorant-infant-semiBold'>{word.primaryWord}</span> <span className='font-cormorant-infant-medium-italic'>&#91; {word.relatedWord} &#93;</span> —
          </h1>
          <h2 className='lowercase font-raleway-italic font-light'>
            {word.meaning}
          </h2>
          <hr className='my-10 font-raleway font-normal'/> 
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