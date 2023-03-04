import React from "react";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import gana from './../../assets/img/landing/financial/services/gana.jpg';
import imguno from './../../assets/img/landing/financial/comof/01.jpg';
import imgdos from './../../assets/img/landing/financial/comof/02.jpg';
import imgtres from './../../assets/img/landing/financial/comof/03.jpg';
import imgcuatro from './../../assets/img/landing/financial/comof/04.jpg';
import imgcinco from './../../assets/img/landing/financial/comof/05.jpg';
import imgcincoc from './../../assets/img/landing/financial/comof/05c.jpg';

const ComoFunciona =  () =>{
    return (
<section className="container py-5 my-2 my-md-4 my-lg-5">
{/* que en imágen de arriba salga sólo desde "!Gana..." hasta "...tú tiempo" */}
        <img src={gana} className="rounded-3" alt="Gana con Nosotros" />
        {/* <div className="card h-100 card-body card-hover mx-2">
          <img src={gana} className="rounded-3" alt="Gana con Nosotros" />
 y abajo solo desde "con ..."
        </div> */}
        <br></br>
        <div className="row pt-xl-1 pb-xl-3">
        {/* <h2 className="h1 text-center pt-1 pt-xl-3 mb-lg-4 text-warning">¿Cómo funciona?</h2> */}
          <div className="col-lg-3 col-md-4">
          <h2 className="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2 pt-xl-3 mb-lg-4 text-warning" style={{maxWidth: '500px'}}>¿Cómo Funciona?</h2>
          <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
            <button type="button" id="prev-testimonial" className="btn btn-prev btn-icon btn-sm me-2">
              <i className="bx bx-chevron-left" />
            </button>
            <button type="button" id="next-testimonial" className="btn btn-next btn-icon btn-sm ms-2">
              <i className="bx bx-chevron-right" />
            </button>
          </div>
          </div></div>
        <Swiper
          modules={[Navigation, Pagination]}
          className="swiper mx-n2"
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoHeight={true}
          navigation={{'prevEl':'#prev-testimonial','nextEl':'#next-testimonial'}}
          pagination={{clickable:true,'el':'.swiper-pagination'}}
          breakpoints= {
            {500: {slidesPerView: 2},800: {slidesPerView: 3},1200: {slidesPerView: 4}}
          }

          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper-wrapper">
            <SwiperSlide
              className="swiper-slide h-auto py-3">
                <div className="card h-100 card-body card-hover mx-2">
                  <i className="bx bx-rocket display-5 fw-normal card-icon" style={{color: '#b4b7c9'}} />
                  <img src={imguno} className="rounded-3" alt="Encuentra" />
                </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3" >
              <div className="card h-100 card-body card-hover mx-2">
                <i className="bx bx-like display-5 fw-normal card-icon" style={{color: '#b4b7c9'}} />
                <img src={imgdos} className="rounded-3" alt="Envía" />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3" >
              <div className="card h-100 card-body card-hover mx-2">
                <i className="bx bx-time-five display-5 fw-normal card-icon" style={{color: '#b4b7c9'}} />
                <img src={imgtres} className="rounded-3" alt="Gestión" />
              </div>

            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3">
              <div className="card h-100 card-body card-hover mx-2">
                <i className="bx bx-group display-5 fw-normal card-icon" style={{color: '#b4b7c9'}} />
                <img src={imgcuatro} className="rounded-3" alt="Notificación" />
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="swiper-slide h-auto py-3">
              <div className="card h-100 card-body card-hover mx-2">
                <i className="bx bx-money display-5 fw-normal card-icon" style={{color: '#32cd32'}} />
                <img src={imgcincoc} className="rounded-3" alt="Gana dinero" />
              </div>
            </SwiperSlide>

            <div className="swiper-pagination position-relative d-xl-none pt-3 mt-4" />
          </div>
        </Swiper>

          <img src={imgcinco} className="rounded-3" alt="Aumenta tus ingresos" />

      {/*  <div className="card h-100 card-body card-hover mx-2">
          <img src={imgcinco} className="rounded-3" alt="Aumenta tus ingresos" />
        </div> */}

        <div className="d-flex flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        {/*<div className="card h-100 card-body card-hover mx-2">

           <a href="account-signup.html" className="btn btn-warning shadow-warning btn-lg text-dark">INSCRIBIRSE</a>
        </div>*/}
          <a href="account-signup.html" className="btn btn-warning shadow-warning btn-lg text-dark">INSCRIBIRSE</a>
        </div>
      </section>
    );
  };
export default ComoFunciona;
