import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavLink,
  Nav,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Item, Title } from "./itemRedes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.scss";
import React, { useState } from "react";
const NavbarHeader = () => {
  return (
    <>
      <Navbar
        bg="blue"
        expand={false}
        className="fixed-top background-color flex text-center items-center justify-center justify-items-center m-auto pt-auto"
      >
        <Container fluid>
          <Title className="title-nova">
            <span>Super</span>
            <span className="nova">Nova</span>
            <span>Anime.</span>
          </Title>

          <Nav className=" ">
            <div className="flex gap-5">
              <NavLink className="navlink d-none d-xl-block">
                <a href="#">home</a>
              </NavLink>

              <NavLink className="navlink d-none d-xl-block">
                <a href="#">noticias</a>
              </NavLink>
              <NavLink className="navlink d-none d-xl-block">
                <a href="#">animes</a>
              </NavLink>
            </div>
          </Nav>

          <div className="d-flex gap-3 ">
            <Item className="d-none d-xl-block">
              <a href="#">
                <FontAwesomeIcon
                  className="bg-Icon-color"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </a>
            </Item>
            <Item className="d-none d-xl-block">
              <a href="#">
                <FontAwesomeIcon
                  className="bg-Icon-color"
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </a>
            </Item>
            <Item className="d-none d-xl-block">
              <a href="#">
                <FontAwesomeIcon
                  className="bg-Icon-color"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </a>
            </Item>
            <Item className="d-none d-xl-block">
              <a href="#">
                <FontAwesomeIcon
                  className="bg-Icon-color"
                  icon={faTiktok}
                ></FontAwesomeIcon>
              </a>
            </Item>
            <Item className="d-none d-xl-block">
              <a href="#">
                <FontAwesomeIcon
                  className="bg-Icon-color"
                  icon={faYoutube}
                ></FontAwesomeIcon>
              </a>
            </Item>
          </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="bg-white "
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="canvas-header">
              <Title className="title-nova">
                <span>Super</span>
                <span className="nova">Nova</span>
                <span>Anime.</span>
              </Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="color-canvas">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  className="bg-blue text-green hover:bg-green hover:text-blue transition-all  duration-300"
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
