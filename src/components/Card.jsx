import { React, useContext, useEffect } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import words from '../assets/data/words.json';
import { PiArrowDownRightThin } from 'react-icons/pi';

const Card = (
  {word}
) => {
  // const { theme, setTheme } = useContext(ThemeContext);
  //   useEffect(() => {
  //   const theme = 'variant-inverse';
  //   setTheme(theme);
  // }, [setTheme]);

  const formattedId = word.id < 10 ? '0' + word.id : word.id;

  return (
    <div className='w-full p-10 border border-peach h-6/10 leading-none'>
      <div className={`${theme} p-16 h-full border border-peach bg-letter`} data-letter={() => word.primaryWord.slice(0, 1)}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <div className='leading-normal'>
              <span className='font-cormorant-infant-semiBold uppercase text-clamp-s'>
                {word.primaryWord} &#91; {word.relatedWord}	&#93;	—
              </span>
              <br/>
              <span className='font-raleway text-clamp-s'>
                {word.meaning}
              </span>
            </div>
            <span className='font-raleway font-light text-clamp-l'>
              {formattedId}
            </span>
          </div>
          <div className="flex justify-between text-peach items-end">
            <div className='font-raleway lowercase h-min text-clamp-s'>
              {word.tags}
            </div>
            <PiArrowDownRightThin viewBox='60 60 136 136' className='w-clamp-s h-auto p-0'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card