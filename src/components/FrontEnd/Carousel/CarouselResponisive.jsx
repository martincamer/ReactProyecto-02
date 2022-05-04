import React, { Component } from 'react';
import Slider from 'react-slick';
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

export default class Responsive extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
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
			<div>
				<h2> Responsive </h2>
				<Slider className="py-3" {...settings}>
					<img
						className="rounded-3 mx-3 px-3"
						src="https://cdn.jkanime.net/assets/images/animes/video/image/jkvideo_8884f91b8ba039d740fa99d8b3817738.jpg"
					></img>
					<img
						className="rounded-3 mx-3 px-3"
						src="https://cdn.jkanime.net/assets/images/animes/video/image/jkvideo_0e909f95516342a275e560d1e1769800.jpg"
					></img>
					<img
						className="rounded-3 mx-3 px-3"
						src="https://cdn.jkanime.net/assets/images/animes/video/image/jkvideo_8884f91b8ba039d740fa99d8b3817738.jpg"
					></img>
					<img
						className="rounded-3 mx-3 px-3"
						src="https://cdn.jkanime.net/assets/images/animes/video/image/jkvideo_8884f91b8ba039d740fa99d8b3817738.jpg"
					></img>
				</Slider>
			</div>
		);
	}
}
