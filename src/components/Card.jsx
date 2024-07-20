import React from 'react'
import serverData from '../assets/serverData.json'


const Card = ({ cardInfo, variant }) => {
	let card = serverData.cards[0];

  card.id = card.id < 10 ? `0${card.id.toString()}` : card.id;
  card.primaryWord = capitalizeFirstLetter(card.primaryWord);
  card.relatedWord = ;
  card.description = ;

  function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
		<div className='m-1 p-6 border border-solid border-peach'>
			<div className='border border-solid border-coral'>
				<div className='flex justify-between items-center'>
					<div className='font-raleway'>1</div>
					<div className='font-raleway text-9xl'>{formattedId}</div>
				</div>
			</div>
		</div>
  )
}

export default Card