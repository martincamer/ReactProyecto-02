import React from 'react';
import AnimesCard from './AnimesCard';
import { DataAnimes } from '../Data/Animes/DataAnimes';
import ReactPlayer from 'react-player';
const SectionOne = () => {
	return (
		<div className="flex flex-grow-0 flex-wrap flex-row justify-center text-center items-center content-center mx-auto py-[20px] gap-[20px] px-3">
			<AnimesCard
				nombre={DataAnimes.Naruto.titulo}
				imagen={DataAnimes.Naruto.imagen}
				url={DataAnimes.Naruto.video}
			></AnimesCard>
			<AnimesCard
				nombre={DataAnimes.Naruto.titulo}
				imagen={DataAnimes.Naruto.imagen}
				url={DataAnimes.Naruto.video}
			></AnimesCard>
			<AnimesCard
				nombre={DataAnimes.Naruto.titulo}
				imagen={DataAnimes.Naruto.imagen}
				url={DataAnimes.Naruto.video}
			></AnimesCard>
			<AnimesCard
				nombre={DataAnimes.Naruto.titulo}
				imagen={DataAnimes.Naruto.imagen}
				url={DataAnimes.Naruto.video}
			></AnimesCard>
			<AnimesCard
				nombre={DataAnimes.Naruto.titulo}
				imagen={DataAnimes.Naruto.imagen}
				url={DataAnimes.Naruto.video}
			></AnimesCard>
		</div>
	);
};

export default SectionOne;
