import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const WordsScrollView = ({ words }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Track the active snapped card
  const scrollableContainerRef = useRef(null);
  const cardRefs = useRef([]); // Reference to each card

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

    // Observe each card
    cardRefs.current.forEach((card) => observer.observe(card));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [words.length]);

  return (
    <div
      ref={scrollableContainerRef}
      className="w-full max-w-[70%] mx-auto overflow-y-scroll grid grid-cols-subgrid gap-12 px-20 snap-y snap-mandatory custom-scrollbar"
    >
      {words.map((word, index) => (
        <div
          key={word.id}
          data-index={index}
          ref={(el) => (cardRefs.current[index] = el)}
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
