import React from 'react';
import '../Data/Animes/DataAnimes';
import { DataAnimes } from '../Data/Animes/DataAnimes';
import CardCapitulosNaruto from './CardCapitulosNaruto';
import CardNaruto from './CardNaruto';
import Navbar from '../Header/Navbar';
import ReactPlayer from 'react-player';

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
				capituloUno={DataAnimes.Naruto.capitulo.capitulouno}
				capituloDos={DataAnimes.Naruto.capitulo.capitulodos}
				capituloTres={DataAnimes.Naruto.capitulo.capitulotres}
				capituloCuatro={DataAnimes.Naruto.capitulo.capitulocuatro}
				capituloCinco={DataAnimes.Naruto.capitulo.capitulouno}
				capituloSeis={DataAnimes.Naruto.capitulo.capitulouno}
				capituloSiete={DataAnimes.Naruto.capitulo.capitulouno}
				capituloOcho={DataAnimes.Naruto.capitulo.capitulouno}
				capituloNueve={DataAnimes.Naruto.capitulo.capitulouno}
				capituloDiez={DataAnimes.Naruto.capitulo.capitulouno}
				capituloOnce={DataAnimes.Naruto.capitulo.capitulouno}
				capituloDoce={DataAnimes.Naruto.capitulo.capitulouno}
			/>
			<ReactPlayer
				controls
				autoplay
				url="https://00f74ba44b9ea3ac193aae061629089e5ab38523e2-apidata.googleusercontent.com/download/storage/v1/b/tamarindos/o/naruto%2F001.mp4?jk=AFshE3WSVIfK_0VpNz9y03simnN1cDOe8D87Va5h_SShmAWRbzl5-m4LCrj7DPS2PPucNoKCKkr7DeAVDIvJOOBcMecJsCokYKcnsIqsNDcCa_9VpsyBNr2PpfF8X-SjLKzhA-NEQdnIGlu3lTFZi6dx2uebZXaaWzbSVCTpnmQdzEsMuRvb9pEIxZ9jCo-HyvZP0aag1anxMlMufDYI5eGW684FU2D6YBSmJNZtJDuHtdFEszlm-Bph-1Q1tOvA5tZ9qn4wc1z63xVO3NehDfc4YzalFJXMqwio7bIeHlTY4eUsyS4byZ9NcTGM2xUhNPa2kGnsEd0jDzZw_vOZrEFZw1ZO6wKVyKOVXv4VolLl2DsXkRv5LK8y0r4DrUpsDMZLFs80m9uqB29GqfHvaKFb7oTAQEtg0wTQuGUnECx0T-Sb7C9DI-mPXrvqCgPiNao8X0PY8o1gCFcHmHQEwjLdU2Jw63nZJ15IyChN3_UHHZti8BYz9WnXgBJBPissTfqUSxNpQ1LnC8q-aNWC-oDs1zxwiE2cEsKyLE9K3wUYDstkDYTvusyyRoMpAbBznThJTWnYMoud02VRh2ysALSlbxFIEkoPu0k2simoigjVc8ARq_6gsoQb1q0d7F0S5vOQzw7zwr1qzZYWVeMbBQHGAp_--zMkNR48P_Py0pbCW819JaOwfDYJ7h3PGrZfo5OWhJYT1EEdEphGbiIySF0cMVUYiTjXUmxsUlARvXj4bvjxS_I_r9bL9pHULQRhuGSa7p9U6FCdyeRAQKHEKimqGRQzmYNEw2NQWMdqY5A75S5C7yNv7MYInEVQ_V4TCNAuIGGCEmA5wM55-GfPN_mpCMmy-QymQyRo9bORBnq3QgVuKlkZVRC6aVcYGHTtTjWhRto9erD1msU6ZLtw2IcX9QINIoiZYn8GOYONlb3ha6a7dDlSgQ1D6lrRMZxnmXp21Ar5XHL70IMegVXmPUqcTUy7k-Zcpd_sDkGGEv4Bf3qeBisFXueekjBxpp85aY1pvWpyXC37YlshuyvgbET3&isca=1"
			></ReactPlayer>
		</div>
	);
};

export default Naruto;
