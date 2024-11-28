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

  const cardsContainerStyles = isRandomWordsPage ? 'w-[70%] px-20' : 'w-[70%] pr-20';

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollableContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const cardRefs = useRef([]); // Reference to each card

  let isScrolledFromSideBar = false;

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

    // Ensure cardRefs are valid before observing
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup observer on component unmount or words change
    return () => observer.disconnect();
  }, [words]); // Re-run effect when `words` changes

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
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', inline: "start" });
    }
  
    // Check sidebar visibility and scroll only if needed
    const alphabetIndex = ukrainianAlphabet.indexOf(letter);
    const sidebarItem = sidebarRef.current?.children[alphabetIndex];
    if (sidebarItem) {
      const { top, bottom } = sidebarItem.getBoundingClientRect();
      const { top: sidebarTop, bottom: sidebarBottom } = sidebarRef.current.getBoundingClientRect();
  
      // Scroll sidebar if the item is out of view
      if (top < sidebarTop || bottom > sidebarBottom) {
        sidebarItem.scrollIntoView({ behavior: 'smooth', inline: "start" });
      }
    }
  };
  

  return (
    <div
      className={`${!isRandomWordsPage ? 'flex flex-row justify-center' : ''} w-full max-h-full mx-auto pb-[100px]`}
    >
      {!isRandomWordsPage && (
        <div
          ref={sidebarRef}
          className="w-[100px] gap-14 flex flex-col justify-start items-center font-raleway font-medium text-4xl text-peach overflow-y-scroll overflow-x-hidden scrollbar-hide-inactive h-[90%]"
        >
          {ukrainianAlphabet.map((letter) => (
            <div
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className={`cursor-pointer transition-transform duration-300 min-w-full text-center ${
                words[activeCardIndex]?.primaryWord[0] === letter
                  ? 'text-cherry font-cormorant-infant-bold-italic p-1 border-b border-cherry scale-150' // Highlight and scale
                  : 'scale-100' // Reset scale for inactive
              }`}
            >
              <p>{letter}</p>
            </div>
          ))}
        </div>
      )}

      <div
        ref={scrollableContainerRef}
        className={`w-[70%] px-20 justify-self-center h-full overflow-y-scroll grid grid-cols-subgrid gap-12 snap-y snap-mandatory custom-scrollbar`}
        // className={`${cardsContainerStyles} justify-self-center h-full overflow-y-scroll grid grid-cols-subgrid gap-12 snap-y snap-mandatory custom-scrollbar`}
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