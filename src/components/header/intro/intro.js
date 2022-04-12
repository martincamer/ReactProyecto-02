import React from "react";
import { Carousel, Container } from "react-bootstrap";
import imguno from "../intro/intro1.jpg";
import imgdos from "../intro/intro2.jpg";
import imgtres from "../intro/intro3.jpg";
import "../style.scss";

const Intro = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className=" d-block w-100 img-opacity" src={imguno}></img>
          <Carousel.Caption className="carousel-item-uno">
            <h3 className="h3-title mt-3 mb-3">
              Mira que esperas para ver anime!
            </h3>
            <p className="p-title mt-3 mb-3">
              Junpei está durmiendo felizmente durante el recital de ballet de
              su hermana cuando un bailarín sube al escenario. Conmovido por la
              fuerza y ​​habilidad que muestra el bailarín, el niño descubre su
              amor por este arte. ¡Pero después de que ocurre cierta tragedia,
              promete dejar atrás su pasado y convertirse en el epítome de la
              masculinidad! ¿Qué hará cuando su amor por el ballet se reavive?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 img-opacity" src={imgdos}></img>
          <Carousel.Caption className="carousel-item-uno">
            <h3 className="h3-title mt-3 mb-3">
              Mira que esperas para ver anime!
            </h3>
            <p className="p-title mt-3 mb-3">
              Junpei está durmiendo felizmente durante el recital de ballet de
              su hermana cuando un bailarín sube al escenario. Conmovido por la
              fuerza y ​​habilidad que muestra el bailarín, el niño descubre su
              amor por este arte. ¡Pero después de que ocurre cierta tragedia,
              promete dejar atrás su pasado y convertirse en el epítome de la
              masculinidad! ¿Qué hará cuando su amor por el ballet se reavive?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 img-opacity" src={imgtres}></img>
          <Carousel.Caption className="carousel-item-uno">
            <h3 className="h3-title mt-3 mb-3">
              Mira que esperas para ver anime!
            </h3>
            <p className="p-title mt-3 mb-3">
              Junpei está durmiendo felizmente durante el recital de ballet de
              su hermana cuando un bailarín sube al escenario. Conmovido por la
              fuerza y ​​habilidad que muestra el bailarín, el niño descubre su
              amor por este arte. ¡Pero después de que ocurre cierta tragedia,
              promete dejar atrás su pasado y convertirse en el epítome de la
              masculinidad! ¿Qué hará cuando su amor por el ballet se reavive?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Intro;
