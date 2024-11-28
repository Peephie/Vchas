import { React, useContext, useEffect } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import { PiArrowDownRightThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Asterisk from '../assets/vectors/asterisk.svg';

const Card = ({word, variant = 'base'}) => {
  const { theme } = useContext(ThemeContext);
  const bgCardClass = variant == 'bg-letter' ? 'bg-letter-card' : '';
  
  const getFormattedId = () => {
    if (variant == 'id-hidden') {
      return <div className="max-h-full h-clamp-l">
        <Asterisk viewBox="73.99 64 364.02 384" className="max-h-full w-auto mr"/>
      </div>
    }
    const formattedId = word.id < 10 ? '0' + word.id : word.id;
    return <>
      <span className='font-raleway font-light text-clamp-l'>
        {formattedId}
      </span>
    </>
  }

  return (
    <div className='w-full h-full p-clamp-s border border-peach h-6/10 leading-none container-type-inline'>
      <div className={`${theme} ${bgCardClass} p-clamp-s h-full border border-peach`} data-letter={word.primaryWord.slice(0, 1)}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <Link to={`/words/${word.id}`} className='leading-normal'>
              <span className='font-raleway font-semibold uppercase text-clamp-s'>
                {word.primaryWord} &nbsp; 
                <span className='italic'>&#91; {word.relatedWord}	&#93;	—</span>
              </span>
              <br/>
              <span className='font-raleway text-clamp-s lowercase'>
                {word.meaning}
              </span>
            </Link>
            <div>
              {getFormattedId()}
            </div>
          </div>
          <div className="flex justify-between text-peach items-end">
            <div className='font-raleway lowercase h-min text-clamp-s'>
              {word.tags}
            </div>
            <Link to={`/words/${word.id}`}>
              <PiArrowDownRightThin viewBox='60 60 136 136' className='w-clamp-s h-auto p-0'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card