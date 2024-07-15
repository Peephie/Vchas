import Navbar from './Navbar'
import MainHero from './MainHero'

const MainScreen = () => {
	return (
		<div className='bg-gradient-to-r from-beige from-50% to-cherry to-50%'>
			<Navbar/>
			<div className='grid grid-cols-50/50'>
				<MainHero 
					heading='Випадкове Слово'
					subheading='ідеально для тих, кого цікавить нове'
					primaryColor='beige'
					brandColor='cherry'
					linkValue='#'
					bgImage='../images/ink-image.png'
				/>
				<MainHero 
					heading='Переглянути Всі Слова'
					subheading='ідеально для тих, кого цікавить навчання'
					primaryColor='cherry'
					brandColor='beige'
					linkValue='#'
					bgImage='../images/paper-image.png'
				/>
			</div>
		</div>
	)
}

export default MainScreen