import Navbar from './Navbar'
import MainHero from './MainHero'

const MainScreen = () => {
	return (
		<div className='flex flex-col justify-between h-full bg-gradient-to-r from-beige from-50% to-cherry to-50%'>
			<div className='mb-30'>
				<Navbar/>
			</div>
			<div className='grid grid-cols-50/50 mb-20'>
				<MainHero 
					heading='Випадкове Слово'
					subheading='ідеально для тих, кого цікавить нове'
					primaryColor='beige'
					brandColor='cherry'
					linkValue='#'
					bgImage='ink-image'
				/>
				<MainHero 
					heading='Переглянути Всі Слова'
					subheading='ідеально для тих, кого цікавить навчання'
					primaryColor='cherry'
					brandColor='beige'
					linkValue='#'
					bgImage='paper-image'
				/>
			</div>
		</div>
	)
}

export default MainScreen