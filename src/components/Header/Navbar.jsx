import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Nav,
	Offcanvas,
	Navbar,
	Container,
	Form,
	FormControl,
	Button,
	NavLink,
} from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';

const Navs = () => {
	return (
		<div>
			{[false].map((expand) => (
				<Navbar
					key={expand}
					className=" bg-pink-600 cursor-pointer"
					expand={expand}
				>
					<Container fluid className="mx-2">
						<div className="font-bold text-2xl" href="#">
							<p className="text-white">
								Super<span className="text-gray-800">Nova</span> Anime.
							</p>
						</div>
						<div className="hidden items-center gap-[30px] lg:flex">
							<NavLink className="text-white font-bold text-xl">
								Categorias
							</NavLink>
							<Form className="d-flex gap-3">
								<FormControl
									type="search"
									placeholder="Buscar Animes..."
									aria-label="Search"
								/>
								<Button
									variant="outline-dark"
									className="bg-gray-600 text-pink-white border-none font-bold"
								>
									Buscar
								</Button>
							</Form>
							<div className=" redes-sociales gap-[10px] hidden md:flex">
								<a href="#">
									<FaDiscord className="text-[40px] text-white hover:scale-110 hover:duration-300 hover:opacity-80"></FaDiscord>
								</a>
								<a href="#">
									<FaFacebook className="text-[40px] text-white hover:scale-110 hover:duration-300 hover:opacity-80"></FaFacebook>
								</a>
								<a href="#">
									<FaInstagram className="text-[40px] text-white hover:scale-110 hover:duration-300 hover:opacity-80"></FaInstagram>
								</a>
							</div>
						</div>
						<Navbar.Toggle
							className="bg-white"
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									className="text-pink-600 font-bold text-xl border-b-4 rounded-[3px] border-pink-600"
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									SuperNova Anime
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end text-sm font-bold py-3  px-3 rounded-[10px] bg-gray-800">
									<div className="flex gap-[30px] justify-center">
										<NavLink className="text-white bg-pink-600  p-1 mx-auto rounded-2">
											Inicio
										</NavLink>
										<NavLink className="text-white bg-pink-600  p-1 mx-auto rounded-2">
											Horario
										</NavLink>
										<NavLink className="text-white bg-pink-600  p-1 mx-auto rounded-2">
											Directorio
										</NavLink>
										<NavLink className="text-white bg-pink-600  p-1 mx-auto rounded-2">
											Top
										</NavLink>
									</div>
									<Form className="d-flex py-2 my-2">
										<FormControl
											type="search"
											placeholder="Buscar Animes..."
											aria-label="Search"
										/>
									</Form>
									<div className="flex justify-center">
										<p className="text-white  border-b-4 border-pink-600 w-[135px]">
											Animes por Genero:
										</p>
									</div>
									<div className="grid grid-cols-2 justify-center content-center mx-auto  gap-[60px]">
										<div>
											<Nav.Link href="#action1" className="text-white">
												Accion
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Autos
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Colegial
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Cosas de la vida
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Demonios
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Drama
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Fantasia
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Historico
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Juegos
											</Nav.Link>

											<Nav.Link href="#action1" className="text-white">
												Mecha
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Misterio
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Niños
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Policial
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Romance
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												SuperPoderes
											</Nav.Link>

											<Nav.Link href="#action1" className="text-white">
												Thriller
											</Nav.Link>
										</div>

										<div>
											<Nav.Link href="#action1" className="text-white">
												Artes Marciales
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Aventura
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Comedia
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Deportes
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Ecchi
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Harem
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Josei
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Magia
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Militar
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Musica
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Parodia
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Samurai
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Terror
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Vampiros
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Yuri
											</Nav.Link>
											<Nav.Link href="#action1" className="text-white">
												Space
											</Nav.Link>
										</div>
									</div>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</div>
	);
};

export default Navs;
