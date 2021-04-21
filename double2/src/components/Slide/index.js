import React from 'react';
import Carousel from 'nuka-carousel';

import * as SC from "./SlideStyle";

import PreviousArrow from "../../assets/circle_chevron_left.svg"
import NextArrow from "../../assets/circle_chevron_right.svg"
import Banner from "../../assets/banner.png"


export default function Slider() {
  return (
    <Carousel autoplay autoplayInterval={2000} wrapAround
    renderCenterLeftControls={({ previousSlide }) => (
      <SC.PrevImage src={PreviousArrow} alt="" onClick={previousSlide}/>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <SC.NextImage src={NextArrow} alt="" onClick={nextSlide}/>
    )}
    >
      <img src={Banner} />
      <img src={Banner} />
      <img src={Banner} />
      <img src={Banner} />
      <img src={Banner} />
    </Carousel>
  )
}
