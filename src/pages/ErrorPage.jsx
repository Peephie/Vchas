import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../assets/hooks/ThemeContext';

const ErrorPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = 'variant-base';
    setTheme(theme);
  }, [setTheme]);

  const navigate = useNavigate();

  return (
    <div className={`${theme} flex flex-col w-full h-full max-h-full`}>
      <div className="h-1/6"></div>
      <div className='m-auto mt-0 mb-0 text-center h-fit'>
        <h1 className='font-cormorant-infant-bold text-14xl mb-5 leading-none'>
          4
          <span className='font-snell relative -left-3'>
            O
          </span>
          4
        </h1>
        <h2 className='font-cormorant-infant-bold uppercase text-5xl mb-5'>Йой</h2>
        <span className='block font-raleway-italic font-light text-2xl mb-24'>Схоже ти збився зі шляху</span>
        <div className='w-fit h-max m-auto my-0'>
          <Link onClick={() => navigate(-1)}
            className='px-10 py-3 border border-current font-cormorant-infant-bold-italic uppercase block'
          >
            Назад
          </Link>
        </div>
      </div>
      <div className="h-2/6"></div>
    </div>
  )
}

export default ErrorPage