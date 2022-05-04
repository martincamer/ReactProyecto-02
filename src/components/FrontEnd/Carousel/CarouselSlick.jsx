import React, { Component } from 'react';
import Slider from 'react-slick';
import ImagenCarouselProps from './ImagenCarouselProps';
import { CarouselSlider } from './CarouselCard';
import './app.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = ({ onClick }) => {
	return (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
};

export default class AutoPlay extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 0,
			autoplay: true,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		};
		return (
			<div>
				<Slider
					{...settings}
					className="flex justify-center mx-auto items-center content-center py-5 w-[100%] lg:w-[1000px]"
				>
					<ImagenCarouselProps
						imagenCarousel={CarouselSlider.Slides.imagen}
						titulo={'Mira Ya el Nuevo Episodio'}
						button="Ver Ya"
					/>
					<ImagenCarouselProps
						imagenCarousel={CarouselSlider.Slides.imagenDos}
						titulo={'Mira Ya el Nuevo Episodio'}
						button="Ver Ya"
					/>
					<ImagenCarouselProps
						imagenCarousel={CarouselSlider.Slides.imagenTres}
						titulo={'Mira Ya el Nuevo Episodio'}
						button="Ver Ya"
					/>
				</Slider>
			</div>
		);
	}
}
