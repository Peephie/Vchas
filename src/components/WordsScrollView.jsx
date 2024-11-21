import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const WordsScrollView = ({ words }) => {
  const ukrainianAlphabet = [
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч',
    'Ш', 'Щ', 'Ь', 'Ю', 'Я'
  ];

  const location = useLocation();
  const locationPathname = location.pathname.replace('/', '');
  const isRandomWordsPage = locationPathname === 'randomWords';

  const cardsContainerStyles = isRandomWordsPage ? 'w-[68%] px-20' : 'w-[59%] pr-20';

  const [activeCardIndex, setActiveCardIndex] = useState(0); // Track the active snapped card
  const scrollableContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const cardRefs = useRef([]); // Reference to each card

  useEffect(() => {
    const container = scrollableContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveCardIndex(index);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [words.length]);

  useEffect(() => {
    if (activeCardIndex < words.length) {
      const letter = words[activeCardIndex].primaryWord[0];
      const index = ukrainianAlphabet.indexOf(letter);
      if (sidebarRef.current && index !== -1) {
        const sidebarItem = sidebarRef.current.children[index];
        sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeCardIndex, words, ukrainianAlphabet]);

  const scrollToLetter = (letter) => {
    const index = words.findIndex((word) => word.primaryWord.startsWith(letter));
    if (index !== -1 && cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`${!isRandomWordsPage ? 'flex flex-row justify-center' : ''} w-full max-h-full mx-auto pb-[100px]`}
    >
      {!isRandomWordsPage && (
        <div
          ref={sidebarRef}
          className="w-[100px] mr-20 gap-14 flex flex-col justify-start items-center font-raleway font-medium text-4xl text-peach overflow-y-scroll h-[80vh] scrollbar-hide-active"
        >
          {ukrainianAlphabet.map((letter, idx) => (
            <div
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className={`cursor-pointer ${
                words[activeCardIndex]?.primaryWord[0] === letter
                  ? 'text-cherry font-bold'
                  : ''
              }`}
            >
              <p>{letter}</p>
            </div>
          ))}
        </div>
      )}

      <div
        ref={scrollableContainerRef}
        className={`${cardsContainerStyles} justify-self-center h-full overflow-y-scroll grid grid-cols-subgrid gap-12 snap-y snap-mandatory custom-scrollbar`}
      >
        {words.map((word, index) => (
          <div
            key={word.id}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`aspect-card container-type-inline bg-red-700 scale snap-always snap-start transition-transform duration-300 ease-out origin-top ${
              index === activeCardIndex ? 'scale-100' : 'scale-80'
            }`}
          >
            <Card word={word} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsScrollView;
