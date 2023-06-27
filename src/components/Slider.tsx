import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper";



const Slider = ({ slides }: any) => {  

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = slides[swiper.realIndex];
    const activeId = activeSlide.id;
    setCurrentSlide(swiper.realIndex);
    
  };
  

  return (
    <div className='w-full text-center relative h-[330px] md:h-[50%]'>
      <div
        className='absolute inset-0 z-1 blur-[8px] bg bg-cover bg-inherit transition-all duration-300'
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>
      <div        
        className='max-w-[500px] mx-auto h-full relative z-1 p-4'
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slider: any, index: any) => (
            <SwiperSlide key={index}>
              <div className='h-full w-full rounded-lg'>
                <img
                  src={slider.image}
                  alt='slide_image'
                  width={140}
                  height={140}
                  className='w-full rounded-lg transform transition-transform duration-300 hover:scale-95'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    
  );
};

export default Slider;