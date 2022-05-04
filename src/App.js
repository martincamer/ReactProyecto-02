import Navs from './components/FrontEnd/Header/Navbar';
import Responsive from './components/FrontEnd/Carousel/CarouselResponisive';
import AutoPlay from './components/FrontEnd/Carousel/CarouselSlick';
import './tailwind/index.css';
function App() {
	return (
		<div className="App cursor-pointer text-white bg-[#0a192f]">
			<Navs />
			<AutoPlay />
			<Responsive />
		</div>
	);
}

export default App;
