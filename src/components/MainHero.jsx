const MainHero = ({
	heading, 
	subheading,
	primaryColor,
	brandColor,
	linkValue,
	bgImage
}) => {
	return (
		<div className={`bg-${primaryColor}`}>
			<h1 
				className={`font-bold text-${brandColor} mb-3 uppercase`} 
				href={linkValue}
			>
				{heading}
			</h1>
			<h2 className={`font-bold text-${brandColor} mb-9`}>
				{subheading}
			</h2>
			<image src={bgImage} className="mx-64 my-20"/>
		</div>
	)
}

export default MainHero