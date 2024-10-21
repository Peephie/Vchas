// import picture from `../assets/images/`;
import useImage from "../assets/hooks/useImage";
import { Link } from "react-router-dom";

const MainHero = ({
  heading, 
  subheading,
  color,
  linkValue,
  bgImage,
  link
}) => {
  const textColors = {
    beige: 'text-beige',
    peach: 'text-peach',
    coral: 'text-coral',
    red: 'text-red',
    cherry: 'text-cherry',
    black: 'text-black',
  };

  const divideColors = {
    beige: 'divide-beige',
    peach: 'divide-peach',
    coral: 'divide-coral',
    red: 'divide-red',
    cherry: 'divide-cherry',
    black: 'divide-black',
  };

  const image = useImage(bgImage);
  const textColor = textColors[color];
  const divideColor = divideColors[color];

  return (
    <Link to={link} className="flex flex-col justify-center">
      <div>
        <h1 
          className={`${textColor} font-raleway font-semibold mb-3 uppercase text-center text-3xl`} 
          href={linkValue}
        >
          {heading}
        </h1>
    
        <h2 className={`${textColor} font-raleway-italic font-light mb-9 text-center text-xl`}>
          {subheading}
        </h2>

        <div className={`${divideColor} flex flex-col justify-center items-center divide-y-2`}>
          <div></div>
          <div className=" w-[100px] mt-1"></div>
        </div>

        <img
          // src={require(`../img/${bgImage}.png`)}
          src={image.image} 
          className="mx-auto my-20 object-cover" alt='No Image'
        />
      </div>
    </Link>
  )
}

export default MainHero