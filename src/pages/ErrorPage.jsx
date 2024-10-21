import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../assets/hooks/ThemeContext';
import BorderedButton from '../components/BorderedButton';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = 'variant-base';
    setTheme(theme);
  }, [setTheme]);

  return (
    <div className={`${theme} flex flex-col w-full h-full max-h-full`}>
      <div className="h-1/6"></div>
      <div className='m-auto mt-0 mb-0 text-center h-fit tracking-wider'>
        <h1 className=' font-cormorant-infant-bold text-14xl mb-5 leading-none'>
          <span className='pr-3'>4</span>
          <span className='font-snell relative -left-3 pr-3'>
            O
          </span>
          <span>4</span>
        </h1>
        <h2 className='font-cormorant-infant-bold uppercase text-5xl mb-5'>Йой</h2>
        <span className='block font-raleway-italic font-light text-2xl mb-24'>Схоже ти збився зі шляху</span>
        <div className='w-fit h-max m-auto my-0'>
          <Link onClick={() => navigate(-1)}>
            <BorderedButton theme={theme} label='Назад' />
          </Link>
        </div>
      </div>
      <div className="h-2/6"></div>
    </div>
  )
}

export default ErrorPage