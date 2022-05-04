import React from 'react';
const ImagenCarouselProps = (props) => {
	return (
		<>
			<div
				className="flex mx-auto content-center w-full items-center pr-[110px] "
				style={{
					backgroundImage: `url(${props.imagenCarousel})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					borderRadius: '10px',
					width: '100%',
					height: '400px',
					margin: '0 auto',
					minWidth: '500px',
				}}
			>
				<div className="flex flex-col gap-3 px-3">
					<div>
						<h2 className="text-white text-4xl back font-bold bg-gray-600 py-2 px-2 bg-opacity-50 rounded-[10px] font-mono">
							{props.titulo}
						</h2>
					</div>
					<div>
						<a
							className="bg-white bg-opacity-50 hover:bg-black hover:opacity-50 hover:text-white text-black font-bold text-2xl py-2 px-4  rounded-3"
							href={props.anime}
						>
							{props.button}
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImagenCarouselProps;
