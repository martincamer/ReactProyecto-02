import React from 'react';
import { Card } from 'react-bootstrap';

const AnimesCard = (props) => {
	return (
		<div className="w-full content-center flex justify-center items-center py-10 h-full gap-[3px] px-3 mx-auto">
			<Card className="bg-gray-600 bg-opacity-50 hover:bg-gray-800 p-4 hover:scale-[1.05] hover:duration-500 flex gap-4 text-center">
				<img className="rounded-[10px]" src={props.imagen} alt=""></img>
				<p className="">{props.nombre}</p>
				<a
					className="bg-pink-600 mx-auto p-2 rounded-2 hover:text-white hover:scale-105 hover:duration-300 cursor-pointer"
					href="/"
				>
					{props.verYa}
				</a>
			</Card>
		</div>
	);
};

export default AnimesCard;
