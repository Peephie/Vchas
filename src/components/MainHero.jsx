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
    <div className="flex flex-col justify-center">
      <div className={`bg-${primaryColor}`}>
        <h1 
          className={`font-bold text-${brandColor} mb-3 uppercase text-center text-3xl`} 
          href={linkValue}
        >
          {heading}
        </h1>
        <h2 className={`font-light italic text-${brandColor} mb-9 text-center text-xl`}>
          {subheading}
        </h2>
        <img
          // src={require(`../img/${bgImage}.png`)}
          src={image.image} 
          className="mx-auto my-20 object-cover" alt='No Image'
        />
      </div>
    </div>
  )
}

export default MainHero