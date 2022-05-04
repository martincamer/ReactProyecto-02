import React, { Component } from 'react';
import Slider from 'react-slick';
import { DataAnimes } from '../Data/Animes/DataAnimes';
import AnimesCard from './AnimesCard';
import './app.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import Naruto from '../AnimesIntro/Naruto';

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

export default class Responsive extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			initialSlide: 0,
			autoplay: true,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div className=" bg-[#0a192f]  py-[30px] mx-auto">
				<Slider {...settings} className="h-full ">
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
					<AnimesCard
						imagen={DataAnimes.Naruto.imagen}
						nombre={DataAnimes.Naruto.titulo}
						verYa={'VER AHORA'}
					/>
				</Slider>
			</div>
		);
	}
}
