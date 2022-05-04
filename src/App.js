import Navs from './components/FrontEnd/Header/Navbar';
import Main from './components/FrontEnd/Main/Main';
import './tailwind/index.css';

import Naruto from './components/FrontEnd/AnimesIntro/Naruto';
// import CarouselSlick from './components/FrontEnd/Carousel/CarouselSlick';
import Responsive from './components/FrontEnd/Carousel/CarouselResponisive';
import AutoPlay from './components/FrontEnd/Carousel/CarouselSlick';
function App() {
	return (
		<div className="App">
			<Navs />
			{/* <Carousel slides={CarouselSlider} /> */}
			{/* <Main />
			<Naruto /> */}
			<AutoPlay />
			<Responsive />
		</div>
	);
}

export default App;
