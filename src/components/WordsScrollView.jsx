import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const WordsScrollView = ({ words }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollableContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const container = scrollableContainerRef.current;
    if (!container) return;

    // Create an observer to detect when each card is centered
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

  return (
    <div
      ref={scrollableContainerRef}
      className="w-full max-w-[70%] mx-auto overflow-y-scroll grid grid-cols-subgrid gap-12 px-20 snap-y snap-mandatory custom-scrollbar"
    >
      {words.map((word, index) => (
        <div
          key={word.id}
          data-index={index}
          ref={(el) => (cardRefs.current[index] = el)} // Assign ref for each card
          className={`aspect-card container-type-inline bg-red-700 snap-always snap-start transition-transform duration-300 ease-out origin-top ${
            index === activeCardIndex ? 'scale-100' : 'scale-80'
          }`}
          style={{
            transform: index === activeCardIndex ? 'scale(1.0)' : 'scale(0.8)',
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