import React from 'react'

const WordPage = ({
  word,
  variant = 'variant-inverse'
}) => {
  const brandLetter = word?.primaryWord?.substring(0, 1) ?? '?';

  function getBrandLetterFragment() {
    return(
      <span className='text-peach absolute top-0 right-0 h-4/5'>
        {brandLetter}
      </span>
    )
  }

  return (
    // <div className={`${variant} h-full p-16 flex flex-col justify-between min-h-screen`}>
    <div className={`${variant} max-auto h-full p-16 flex flex-col justify-between`}>
      {/* {getBrandLetterFragment()} */}
      <span>Назад</span>
			<div className='w-1/2'>
				<h1 className='font-cormorant-infant-medium uppercase'>{word.primaryWord} &#91; {word.relatedWord} 	&#93; -</h1>
				<h2>{word.meaning}</h2>
				<hr/>
				<h3>{word.example}</h3>
			</div>
			<div className='flex justify-end'>
				<a>{brandLetter}</a>
			</div>
    </div>
  )
}

export default WordPage