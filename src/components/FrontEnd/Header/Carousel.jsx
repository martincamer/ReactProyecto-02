import React, { useState } from 'react';
import '../Data/Animes/DataAnimes';
import { CarouselSlider } from './CarouselCard';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div className="flex justify-center py-[100px] bg-gray-200">
			<div>
				<FaArrowCircleRight
					className="absolute top-[38%] right-[0] md:right-[0%] lg:right-[25%] text-2xl z-10 select-none"
					onClick={nextSlide}
				/>
				<FaArrowCircleLeft
					className="absolute top-[38%] left-[0] md:left-[0%] lg:left-[25%] text-2xl z-10 select-none "
					onClick={prevSlide}
				/>
				{CarouselSlider.map((slide, index) => {
					return (
						<div
							className={index === current ? 'slide active' : 'slide'}
							key={index}
						>
							{index === current && (
								<img
									src={slide.imagen}
									className="w-[100%] h-[500px] rounded-[10px]"
									alt=""
								></img>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
