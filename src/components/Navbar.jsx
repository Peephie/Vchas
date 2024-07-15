import Links from './NavLinks';

const Navbar = () => {
	const navbarStorage = [
		{label: 'Слова', value:'#'},
		{label: 'Контакти', value:'#'},
		{label: 'Пошук', value:'#'}
	];

	return (
		<>
			<div className='flex justify-between px-16 py-10'>
				<span className='text-cherry italic text-4xl'>ВЧАС</span>
				<Links links={navbarStorage}/>
			</div>
		</>
	)
}

export default Navbar