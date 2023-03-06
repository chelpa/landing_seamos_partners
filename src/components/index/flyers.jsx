import React from "react";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import flyeruno from './../../assets/img/landing/financial/services/01.jpg';
import flyerdos from './../../assets/img/landing/financial/services/02.jpg';
import flyertres from './../../assets/img/landing/financial/services/03.jpg';

const Flyers =  () =>{
    return (
      <section className="container py-5 mt-md-3 my-lg-5">
        <h2 className="h1 pt-xl-2 pb-4 mb-2 mb-lg-3 text-warning">¿Aún no sabes lo que es un Partner?</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          className="swiper mx-n2"
          slidesPerView={1}
          spaceBetween={24}
          autoHeight={true}
          pagination={{clickable:true,'el':'.swiper-pagination'}}
          breakpoints= {
            {480: {slidesPerView: 1},768: {slidesPerView: 2},1024: {slidesPerView: 3},1280: {slidesPerView: 4}}
          }

          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper-wrapper">
            <SwiperSlide
              className="swiper-slide h-auto py-3">
              <div className="card h-100 card-body card-hover mx-2">
                <img src={flyeruno} className="rounded-3" alt="Conocidos" />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3" >
              <div className="card h-100 card-body card-hover mx-2">
                <img src={flyerdos} className="rounded-3" alt="Sistema de Referidos" />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3" >
              <div className="card h-100 card-body card-hover mx-2">
                <img src={flyertres} className="rounded-3" alt="50% comisión total" />
              </div>

            </SwiperSlide>

            <div className="swiper-pagination position-relative d-xl-none pt-3 mt-4" />
          </div>
        </Swiper>


        <div className="d-flex flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <a href="account-signup.html" className="btn btn-warning shadow-warning btn-lg text-dark">AUMENTA TUS INGRESOS</a>


        </div>
      </section>
    );
  };
export default Flyers;

        //
        //   <div className="swiper-wrapper">
        //
        //     <div className="swiper-slide">
        //       <a href="#"><img src="assets/img/landing/financial/services/02.jpg" className="rounded-3" alt="Image" /></a>
        //       <div className="pt-4">
        //         <h3 className="h4">Conoces a </h3>
        //
        //
        //     <div className="swiper-slide">
        //       <a href="#"><img src="assets/img/landing/financial/services/03.jpg" className="rounded-3" alt="Image" /></a>
        //       <div className="pt-4">
        //
        //
        //   </div>
        //
