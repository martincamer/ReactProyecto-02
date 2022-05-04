import React from 'react';
import { FaPlay } from 'react-icons/fa';
const CardCapitulosNaruto = (props) => {
	return (
		<div className="md:w-[100%] lg:w-[1000px] h-full mx-auto">
			<div className="capitulos grid grild-cols-6">
				<div className="title-capitulos flex">
					<p className="text-2xl font-bold py-2 uppercase border-b-4 text-pink-600 border-pink-600">
						{props.titleCapitulos}
					</p>
				</div>
				<div>
					<div className="grid grid-cols-2 md:grid-cols-3 px-3 lg:grid-cols-4 py-[40px]  grid-rows-3 gap-[20px] mx-auto items-center justify-center grid-flow-row">
						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloUno})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>

									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>
						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloDos})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>
						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloTres})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>
						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloCuatro})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>
						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloCinco})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloSeis})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloSiete})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloOcho})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloNueve})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloDiez})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloOnce})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>

						<a className="">
							<div
								className="h-[150px]  w-[100%]  rounded-[10px] hover:scale-[1.03] hover:translate-x-2 hover:duration-500"
								style={{
									backgroundImage: `url(${props.capituloDoce})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
								}}
							>
								<div>
									<ul className="flex">
										<li className="  text-sm  p-1 font-bold text-white opacity-90 bg-pink-600 my-2 mx-1 rounded-[10px] ">
											Capitulo 1
										</li>
									</ul>
									<FaPlay className="mx-auto items-center text-pink-600 opacity-90 text-5xl " />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardCapitulosNaruto;
