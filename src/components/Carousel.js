//import "./Footer.css";
import React from "react";
import Carousel from 'nuka-carousel';
import CarouselImages from "./CarouselImages";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const images = [
  {
    src: "/img/slide/slide1.jpg",
    alt: 1

  },
  {
    src: "/img/slide/slide2.jpg",
    alt: 2

  },
  {
    src: "/img/slide/slide3.jpg",
    alt: 3

  }
];

export default function CarouselComp() {
  return (
    <div style={{
      width: "100%",
      margin: "auto"
    }}>
      <Carousel cellAlign="center"
        slidesToShow={1.3}
        scrollMode="page"
        wrapAround="true">
        {
          images.map((img) =>
          <CarouselImages src={img.src} alt={img.alt} />)
        }
      </Carousel>
    </div>
  );
}