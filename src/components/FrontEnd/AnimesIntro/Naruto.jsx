import React from 'react';
import { Card } from 'react-bootstrap';
import '../Data/Animes/DataAnimes';
import { DataAnimes } from '../Data/Animes/DataAnimes';
import CardCapitulosNaruto from './CardCapitulosNaruto';
import CardNaruto from './CardNaruto';
import Navbar from '../Header/Navbar';
const Naruto = () => {
	return (
		<div className="bg-black">
			<Navbar />
			<CardNaruto
				imagen={DataAnimes.Naruto.imagen}
				titulo={DataAnimes.Naruto.titulo}
				parrafo={DataAnimes.Naruto.parrafo}
			/>
			<CardCapitulosNaruto
				titleCapitulos={DataAnimes.Naruto.cap.capitulos}
				capituloImagenDos={DataAnimes.Naruto.capitulo.capitulodos}
				url={DataAnimes.Naruto.capitulo.capitulodos}
			/>
		</div>
	);
};

export default Naruto;
