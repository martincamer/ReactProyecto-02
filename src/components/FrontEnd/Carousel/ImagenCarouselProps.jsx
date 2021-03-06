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
						<h2 className="text-white text-4xl back font-bold bg-pink-600 py-2 px-2 bg-opacity-50 rounded-[10px] font-mono">
							{props.titulo}
						</h2>
					</div>
					<div>
						<a
							className="  bg-[#0a192f]  font-bold text-2xl    py-2 px-4  rounded-3 hover:text-[#0a192f] hover:bg-[#ffff]  hover:duration-300"
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
