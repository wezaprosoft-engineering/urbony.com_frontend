import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide from './slide';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';

export default function GallerySlider({gallery,slideshow, editable = false}) {

 console.error('Gallery',gallery)
  return (
    <div className="container pb-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className={"mySwiper"}
        slidesPerView={2}
        pagination={{ clickable: true }}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        style={{borderRadius:'25px'}}
        navigation={{nextEl: ".next",prevEl: ".prev"}}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 15
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 15
        //   },
        //   1280: {
        //     slidesPerView: 5,
        //     spaceBetween: 30
        //   },
        }}
      >
        {gallery && gallery.map((img,index) => (
          <SwiperSlide key={img.id} className="py-5 rounded" style={{borderRadius:'25px'}}>
            <Slide cover={img.url} index={index} handleClick={slideshow} editable={editable} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{width:'100%',display:'flex',justifyContent:'end',alignItems:'center',marginTop:'25px',fontSize:'3.5rem',color:'red'}}>
        <FaArrowCircleLeft style={{cursor:'pointer'}} className="prev" />
        <FaArrowCircleRight style={{cursor:'pointer',marginLeft:'20px'}} className="next"/>
      </div>
    </div>
  );
}