import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const AnimesCard = (props) => {
	return (
		<div>
			<div className="">
				<Card className="bg-pink-600 p-4 hover:scale-[1.05] hover:duration-500">
					<img src={props.imagen} alt=""></img>
					<p>{props.nombre}</p>
				</Card>
			</div>
		</div>
	);
};

export default AnimesCard;
