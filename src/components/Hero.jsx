import React, { useEffect, useState } from 'react'
import { Bath, BedDouble ,ChevronLeft,House, ChevronRight} from 'lucide-react';
import '../styles/Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from './Search';


const heroVideos = ["/vd3.mp4", "/vd4.mp4", "/vd2.mp4"];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, 
  };






  return (
    <div className='hero'>
      <Slider {...settings}>
         {heroVideos.map((video, i)=>(
          <div key={i} className='heroCard'>
            <div className='heroImgCon'>
              <video width="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </Slider>
      <div className='overlay'>
         <Search/>
      </div>
     
    </div>
  )
}

export default Hero
