import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const WordsScrollView = ({ words }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Track the active snapped card
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollableContainerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const containerHeight = container.offsetHeight;
      const cardHeight = container.firstChild.offsetHeight;

      // Calculate the center offset to identify the active card based on the center position
      const centerOffset = scrollTop + containerHeight / 2;
      let newActiveIndex = Math.round(centerOffset / cardHeight) - 1;

      // Correct index for edge cases (especially at the end)
      const maxIndex = words.length - 1;
      if (newActiveIndex < 0) newActiveIndex = 0;
      if (newActiveIndex > maxIndex) newActiveIndex = maxIndex;

      // Update active card only if it has changed
      if (newActiveIndex !== activeCardIndex) {
        setActiveCardIndex(newActiveIndex);
      }
    };

    const container = scrollableContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeCardIndex, words.length]);

  return (
    <div
      ref={scrollableContainerRef}
      className="w-full max-w-[70%] mx-auto overflow-y-scroll grid grid-cols-subgrid gap-12 px-20 snap-y snap-mandatory custom-scrollbar"
    >
      {words.map((word, index) => (
        <div
          key={word.id}
          className={`aspect-card container-type-inline bg-red-700 snap-always snap-start transition-transform duration-300 ease-out origin-top ${
            index === activeCardIndex || index < activeCardIndex ? 'scale-100' : 'scale-90'
          }`}
          style={{
            transform:
              index === activeCardIndex || index < activeCardIndex
                ? 'scale(1.0)'
                : 'scale(0.9)',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Card word={word} />
        </div>
      ))}
    </div>
  );
};

export default WordsScrollView;
