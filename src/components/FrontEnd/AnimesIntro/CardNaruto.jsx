import React from 'react';
const CardNaruto = (props) => {
	return (
		<div className=" md:w-[100%] lg:w-[1000px] py-6 h-full mx-auto">
			<div className="py-3 w-[100%] h-full justify-center justify-items-center grid grid-rows-none grid-cols-1 lg:grid-cols-2 mx-auto gap-[30px] bg-gray-400 p-3  rounded-3">
				<div>
					<div>
						<img
							className="rounded-[10px] max-w-full "
							src={props.imagen}
							alt=""
						></img>
					</div>
				</div>

				<div>
					<div className="title ">
						<p className="text-3xl font-bold text-pink-600">{props.titulo}</p>
					</div>
					<div className="py-2">
						<p className="text-xs lg:text-xl p-2 w-full bg-gray-300 text-gray-900 rounded-[10px]">
							{props.parrafo}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardNaruto;
