import { React, useContext, useEffect } from 'react';
import { ThemeContext } from '../assets/hooks/ThemeContext';
// import Utils from '../assets/utils/Utils.js';
import words from '../assets/data/words.json';
// import arrow from '../assets/svg/arrow.svg';
import { PiArrowDownRightThin } from 'react-icons/pi';

const Card = (
// 	{ 
//   cardInfo, 
//   size
// }
	{word}
) => {

  // const card = Utils.formatCard(words[0]);
  // const cardSize = Utils.getCardSize('large');
	// const variants = ['variant-base', 'variant-inverse'];
	const { theme, setTheme } = useContext(ThemeContext);
	useEffect(() => {
    const theme = 'variant-inverse';
    setTheme(theme);
  }, [setTheme]);

	console.log(
		'%c word',
		'color: #007acc;',
		JSON.stringify(word, null, "\t" )
	);
	const formattedId = word.id < 10 ? '0' + word.id : word.id;
	console.log(formattedId);

  return (
    // <div className={`m-1 ${cardSize.padding1} border border-solid border-peach`}>
    //   <div className={`${cardSize.padding2} ${cardSize.cardMinHeight} ${cardSize.fontSize} border border-solid border-coral font-raleway flex flex-col justify-between`}>

    //     <div className='flex justify-between items-center'>
    //       <div>
    //         <span className='font-cormorant-infant-semiBold'>
		// 					{`${card.primaryWord} `}
		// 				</span>
    //         <span className='font-cormorant-infant-medium-italic'>
		// 					{`( ${card.relatedWord} ) —`}
		// 				</span>
    //         <br/>
    //         <span className='font-raleway'>
		// 					{card.description}
		// 				</span>
    //       </div>

    //       <div className={`${cardSize.cardIdFontSize} font-raleway pr-6`}>{card.id}</div>
    //     </div>

    //     <div className='flex justify-between items-center p-'>
    //       <div><a href="">сленг</a></div>
    //       <div><img src={arrow} alt="" /></div>
    //     </div>
    //   </div>
    // </div>
		<div className='container p-10 border border-peach h-1/2'>
			<div className={`${theme} p-16 h-full border border-peach bg-letter`} data-letter={() => word.primaryWord.slice(0, 1)}>
				<div className="flex flex-col justify-between h-full">
					<div className="flex justify-between">
						<div className='text-4xl'>
							<span className='font-cormorant-infant-semiBold uppercase'>
								{word.primaryWord} &#91; {word.relatedWord}	&#93;	—
							</span>
							<br/>
							<span className='font-raleway'>
								{word.meaning}
							</span>
						</div>
						<span className='font-raleway font-light text-8xl'>
							{formattedId}
						</span>
					</div>
					<div className="flex justify-between text-peach items-end">
						<div className='font-raleway text-4xl lowercase leading-9 h-min'>
							{word.tags}
						</div>
						<PiArrowDownRightThin size={76}/>
						{/* <div>
							<img src={arrow} alt="" />
						</div> */}
					</div>
				</div>
			</div>
		</div>
  )
}

export default Card