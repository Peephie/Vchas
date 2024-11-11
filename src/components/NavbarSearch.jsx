import { useState, useEffect, useRef, forwardRef } from 'react';
import { Link } from "react-router-dom";
import SearchPointer from '../assets/vectors/Search/search_result_point.svg';
import words from '../assets/data/words.json';
import anime from 'animejs';

const NavbarSearch = forwardRef(({ theme, onClose }, ref) => {
  const wordsData = words;

  const textColorSearch = theme !== 'variant-beige-to-cherry' ? theme : 'variant-inverse';
  const borderColorSearch = theme !== 'variant-beige-to-cherry' ? 'border-cherry' : 'border-beige';
  const textColorPrimaryWord = theme !== 'variant-beige-to-cherry' || theme === 'variant-base' ? 'text-coral' : 'text-peach';
  const textColorRelatedWord = theme !== 'variant-beige-to-cherry' || theme === 'variant-base' ? 'text-peach' : 'text-coral';
  const colorBullet = textColorPrimaryWord === 'text-coral' ? 'stroke-coral' : 'stroke-peach';
  const searchColorStyling = textColorSearch + ' ' + borderColorSearch;
  
  const [searchValue, changeSearchValue] = useState('');
  const [filteredWordsData, setFilteredWordsData] = useState([]);

  const resultRefs = useRef([]);

  useEffect(() => {
    resultRefs.current = resultRefs.current.slice(0, filteredWordsData.length);

    if (filteredWordsData.length === 0) {
      return;
    }
    
    anime({
      targets: resultRefs.current.filter(Boolean),
      translateX: [-500, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
      duration: 1000,
    });
  }, [filteredWordsData]);

  const handleChangeSearchValue = (event) => {
    
    const value = event.target.value;
    changeSearchValue(value);

    if (!value) {
      setFilteredWordsData([]);
      return;
    }

    const valueLower = value.toLowerCase();
    const matchingData = wordsData
    .filter(word => word.primaryWord.toLowerCase().includes(valueLower) || word.relatedWord.toLowerCase().includes(valueLower))
    .sort((a, b) => {
      const primaryIndexA = a.primaryWord.toLowerCase().indexOf(valueLower);
      const primaryIndexB = b.primaryWord.toLowerCase().indexOf(valueLower);
      
      if (primaryIndexA !== -1 && primaryIndexB === -1) return -1;
      if (primaryIndexA === -1 && primaryIndexB !== -1) return 1;

      const relatedIndexA = a.relatedWord.toLowerCase().indexOf(valueLower);
      const relatedIndexB = b.relatedWord.toLowerCase().indexOf(valueLower);

      if (primaryIndexA !== -1 && primaryIndexB !== -1) return primaryIndexA - primaryIndexB;
      return relatedIndexA - relatedIndexB;
    })
    .slice(0, 3);
    console.log('%csrc/components/Navbar.jsx:72 filteredWordsData', 'color: #007acc;', filteredWordsData);
    setFilteredWordsData([...matchingData]);
  };
  
  return (
    <div className='flex flex-col flex-nowrap justify-center items-center h-5/6	mb-20' ref={ref}>
      <div className='min-w-search flex flex-row justify-center items-end'>
        <input className={`${searchColorStyling} search-input mr-5`} 
          type="text" 
          value={searchValue} 
          onChange={handleChangeSearchValue}
        />
        <span className=' text-search-word'>ПОШУК</span>
      </div>
      <div className="mt-20 min-w-search min-h-56 flex flex-col justify-start items-start pl-2.5 gap gap-10">
        {filteredWordsData.map((word, index) => (
          <Link className="flex flex-row flex-nowrap justify-start items-center text-2xl" 
            key={word.id} 
            to={`words/${word.id}`} 
            onClick={onClose}
            ref={(el) => (resultRefs.current[index] = el)}
          >
            <div className='mr-4'><SearchPointer class={`${colorBullet}`}/></div> 
            <div>
              <span className={`${textColorPrimaryWord} font-raleway-italic mr-3`}>
                {word.primaryWord.toLowerCase()}&nbsp;
              </span> 
              <span className={`${textColorRelatedWord} font-raleway`}>
                [ {word.relatedWord.toLowerCase()} ]
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
});

NavbarSearch.displayName = 'NavbarSearch';

export default NavbarSearch