import { Link } from "react-router-dom";

const Links = ({links, className}) => {
  className = className !== 'variant-beige-to-cherry' ? className : 'variant-inverse';
	const separator = <span className={`${className}`}>/</span>

	function getLink(label, value, index) {
		return <Link to={value} key={index} className={`${className}`}>
			{label}
		</Link>;
	}

	return (
    <>
		{/* <div className="flex justify-between gap-x-5"> */}
			{links.map(({label, value}, index) => {
				const link = getLink(label, value, index);
				let separatedLink = [link];
		
				if (index != links.length - 1) {
					separatedLink.push(separator);
				}

				return separatedLink;
			})}
		{/* </div> */}
    </>
	)
}

export default Links