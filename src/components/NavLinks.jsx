
const Links = ({links}) => {
	const separator = <span className="text-beige">/</span>

	function getLink(label, value, index) {
		return <a href={value} key={index} className="text-beige">
			{label}
		</a>;
	}

	return (
		<div className="flex justify-between gap-x-5">
			{links.map(({label, value}, index) => {
				const link = getLink(label, value, index);
				let separatedLink = [link];
		
				if (index != links.length - 1) {
					separatedLink.push(separator);
				}

				return separatedLink;
			})}
		</div>
	)
}

export default Links