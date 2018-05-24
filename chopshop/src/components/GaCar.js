import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CarSVG from './CarSVG'

let GaCar = ({width,height,x,y,gaCarList}) =>{
  const settings = {
          arrows: true,
          autoplay: true,
          fade: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return <Slider {...settings}>
    {gaCarList.map((car,i)=>
      <div key={i}>
        <h3>Engine Power: {car.config.eng_power}</h3>
        <CarSVG config={car.config}/>
        <h3>Reward: {car.reward}</h3>
        <h3>Fuel Consumed: {car.fuel}</h3>
        <h3>Time Off-Road: {car.grass}</h3>
      </div>)}
    </Slider>
}

export default GaCar;
