// import picture from `../assets/images/`;
import useImage from "../assets/hooks/useImage";

const MainHero = ({
	heading, 
	subheading,
	primaryColor,
	brandColor,
	linkValue,
	bgImage
}) => {
	const image = useImage(bgImage);
	return (
		<div className={`bg-${primaryColor}`}>
			<h1 
				className={`text-${brandColor} mb-3 uppercase text-center text-3xl font-raleway font-semibold`} 
				href={linkValue}
			>
				{heading}
			</h1>
			<h2 className={`text-${brandColor} mb-9 text-center text-xl font-raleway-italic font-light`}>
				{subheading}
			</h2>
			<img
				// src={require(`../img/${bgImage}.png`)}
				src={image.image} 
				className="mx-auto my-20 object-cover" alt='No Image'
			/>
		</div>
	)
}

export default MainHero