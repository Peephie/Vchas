import React from 'react';
import Card from './Card';

const WordsScrollView = ({ words }) => {

  return (
    <div
      className="min-w-[1054px] w-full max-w-[1440px] mx-auto overflow-y-scroll grid grid-cols-subgrid gap-12 pr-16 snap-y snap-mandatory custom-scrollbar"
    >
      {words.map((word, index) => (
        <div
          key={word.id}
          className="aspect-card  container-type-inline bg-red-700 snap-always snap-start"
        >
          <Card word={word} />
        </div>
      ))}
    </div>
  );
};

export default WordsScrollView;