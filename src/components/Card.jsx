import React from 'react'
import Utils from '../assets/utils/Utils.js';
import serverData from '../assets/serverData.json'
import arrow from '../assets/svg/arrow.svg'


const Card = ({ 
  cardInfo, 
  size
}) => {
  const card = Utils.formatCard(serverData.cards[0]);
  const cardSize = Utils.getCardSize('large');

  return (
    <div className={`m-1 ${cardSize.padding1} border border-solid border-peach`}>
      <div className={`${cardSize.padding2} ${cardSize.cardMinHeight} ${cardSize.fontSize} border border-solid border-coral font-raleway flex flex-col justify-between`}>

        <div className='flex justify-between items-center'>
          <div>
            <span className='font-cormorant-infant-semiBold'>{`${card.primaryWord} `}</span>
            <span className='font-cormorant-infant-medium-italic'>{`( ${card.relatedWord} ) —`}</span>
            <br/>
            <span className='font-raleway'>{card.description}</span>
          </div>

          <div className={`${cardSize.cardIdFontSize} font-raleway pr-6`}>{card.id}</div>
        </div>

        <div className='flex justify-between items-center p-'>
          <div><a href="">сленг</a></div>
          <div><img src={arrow} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Card