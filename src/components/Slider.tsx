import React, { useState } from 'react';
import { SliderData } from './Datas/SliderData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper";



const Slider = ({ slides }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeSlide = SliderData[swiper.realIndex];
    const activeId = activeSlide.id;
    setCurrentSlide(swiper.realIndex);
    console.log('Current Slide Id:', activeId);
  };
  

  return (
    <div className='max-w-full mx-auto text-center'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div className='relative h-[330px] md:h-[620px] w-full lg:max-w-[1240px] mx-auto'>
        <div
          className='absolute inset-0 z-1 blur-[8px] bg bg-cover bg-inherit transition-all duration-300'
          style={{
            backgroundImage: `url(${SliderData[currentSlide].image})`,
          }}
        ></div>
        <div
          id='gallery'
          className='max-w-[800px] mx-auto h-full relative z-1'
        >
          <div className='p-4'>
            <div className='h-full'>
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
                {SliderData.map((slider, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Slider;