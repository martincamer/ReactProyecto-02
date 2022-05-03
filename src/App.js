import Carousel from './components/FrontEnd/Header/Carousel';
import Navs from './components/FrontEnd/Header/Navbar';
import Main from './components/FrontEnd/Main/Main';
import './tailwind/index.css';
import { CarouselSlider } from './components/FrontEnd/Header/CarouselCard';
import Naruto from './components/FrontEnd/AnimesIntro/Naruto';
function App() {
	return (
		<div className="App">
			<Navs />
			<Carousel slides={CarouselSlider} />
			<Main />
			<Naruto />
		</div>
	);
}

export default App;
