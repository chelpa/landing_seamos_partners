import React from "react";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactComponent as SvgSmiley } from './../../assets/img/landing/online-courses/pattern-1.svg';

const Preguntas =  () =>{
    return (
      <section className="container py-5 mb-2 mt-md-2 mb-md-4 mt-lg-4 mb-lg-5">
      <div class="position-absolute top-0 start-0 w-100 h-100" data-jarallax-element="-60">
      <SvgSmiley xmlns="http://www.w3.org/2000/svg" width="295" height="295" fill="#fff" opacity=".1" xmlns="https://vecta.io/nano"  style={{ fill: "green" }} class="position-absolute top-0 start-100 translate-middle ms-n4" alt="Pattern"/>

      </div>

        <div className="row pt-xl-1 pb-xl-3">
          <div className="col-lg-3 col-md-4">
          <h2 className="text-center text-md-start mx-auto mx-md-0 pt-md-2" style={{maxWidth: '300px'}}>Preguntas <br className="d-none d-md-inline" />Frecuentes <br className="d-none d-md-inline" /></h2>
          <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
            <button type="button" id="prev-testimonial" className="btn btn-prev btn-icon btn-sm me-2">
              <i className="bx bx-chevron-left" />
            </button>
            <button type="button" id="next-testimonial" className="btn btn-next btn-icon btn-sm ms-2">
              <i className="bx bx-chevron-right" />
            </button>
          </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <Swiper
              modules={[Navigation, Pagination]}
              className="swiper mx-n2"
              slidesPerView={1}
              spaceBetween={8}
              loop={true}
              autoHeight={true}
              navigation={{'prevEl':'#prev-testimonial','nextEl':'#next-testimonial'}}

              breakpoints= {
                {480: {slidesPerView: 1},768: {slidesPerView: 2},1024: {slidesPerView: 3},1280: {slidesPerView: 4}}
              }

              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
            <div className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <div className="card bg-primary text-light h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light"><div className="ps-3">
                          <h6 className="fs-m fw-semibold mb-0 text-primary">¿Qué significa ser un Partner Inmobiliario?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">Ser Partner significa que puedes referir o dar el dato de personas que quieran Vender o Arrendar su Casa, Departamento, Oficina, Locales&nbsp;Comerciales, Bodegas, Estacionamientos, Terrenos, Sitios, Parcelas y&nbsp;
                        GANAR EL 50% DE LA COMISIÓN.</p>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
                </figure>

              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card bg-secondary h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <figcaption className="d-flex align-items-center ps-4 pt-4">
                        <div className="card bg-light">
                          <div className="ps-3">
                            <h6 className="fs-m fw-semibold mb-0 text-dark">¿Cómo puedo ser un Partner Inmobiliario?</h6>
                          </div>
                        </div>
                      </figcaption>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">Para ser Partner es muy simple, debes inscribirte con tu Nombre, Mail, Número de Whatsapp en la página de Partners Inmobiliarios, verificar tu cuenta&nbsp;y empezar a sumar y a Ganar con Nosotros!</p>
                      </blockquote>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                    </figcaption>
                  </figure>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">

                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card  text-secondary bg-success h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left" />
                      </span>
                      <figcaption className="d-flex align-items-center ps-4 pt-4">
                        <div className="card bg-light">
                          <div className="ps-3">
                            <h6 className="fs-m fw-semibold mb-0 text-success">¿Quién puede ser un Partner Inmobiliario?</h6>
                          </div>
                        </div>
                      </figcaption>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0 text-secondary">Cualquier persona puede&nbsp;convertirse en un Partner Inmobiliario que sea mayor de 18 años y que tenga ganas de AUMENTAR SUS INGRESOS. No importa si tienes trabajo, si estás cesante, si no sabes nada del rubro inmobiliario o si eres un experto en el área.</p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                      </div>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                    </figcaption>
                  </figure>


              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <div className="card bg-danger h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light">
                        <div className="ps-3">
                          <h6 className="fs-m fw-semibold mb-0 text-danger">¿Qué propiedades puedes traernos como Partner Inmobiliario?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0 text-white">Todas las propiedades que quieras, no hay limite, el limite lo pones tú!</p>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
                </figure>

              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <div className="card bg-info h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light">
                        <div className="ps-3">
                          <h6 className="text-info fs-m fw-semibold mb-0">¿Cómo funciona la&nbsp;validación de propiedades?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0 text-white">Cuando un Partner Inmobiliario se inscribe en nuestra Página Web nosotros&nbsp;nos contactamos con el&nbsp;Partner luego con el Propietario de la Propiedad, se hace la validación, en la que nuestro equipo analizara los datos enviados para verificar que la información sea válida.</p>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
              </figure>

              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <div className="card bg-light h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light">
                        <div className="ps-3">
                          <h6 className="fs-m fw-semibold mb-0 text-dark">¿Qué ganas tú?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0 text-muted">EJEMPLO: </p>
                      <ul>
                      <li>Si das el Dato de Venta:</li>
                    <p>y tu Contacto quiere Vender con&nbsp;Partners Inmobiliarios&nbsp;una Propiedad de&nbsp;$130.000.000, TÚ te ganas como ingreso&nbsp;$2.600.000.&nbsp;</p><p className="text-primary">¡Solamente dando el&nbsp;DATO te llevas la mitad de la comisión!</p>
                      <li>Si das el Dato de Arriendo:</li>
                      <p>Si tu Contacto quiere Arrendar con&nbsp;Partners Inmobiliarios&nbsp;una propiedad de $ 900.000, tú te ganas como ingreso&nbsp;$450.000.</p>
                      </ul>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
                </figure>

              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                  <div className="card bg-info text-white h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light">
                        <div className="ps-3">
                          <h6 className="fs-m fw-semibold mb-0 text-info">¿Cómo y cuándo pagan?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">Una vez recibido el pago,&nbsp;recibirá el pago dentro de las 48 horas.</p>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide h-auto pt-4">
                <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2 ">
                  <div className="card bg-warning text-white h-100 position-relative border-0 shadow-sm pt-4">
                    <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                      <i className="bx bxs-quote-left" />
                    </span>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <div className="card bg-light">
                        <div className="ps-3">
                          <h6 className="text-warning fs-m fw-semibold mb-0">¿Necesitas tener experiencia en Ventas?</h6>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="card-body pb-3 mb-0">
                      <p className="mb-0">No. Solamente nos tienes que poner en contacto con el Propietario de la Propiedad y nosotros hacemos el resto.</p>
                    </blockquote>
                  </div>
                  <figcaption className="d-flex align-items-center ps-4 pt-4">
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide
                className="swiper-pagination position-relative d-xl-none pt-3 mt-4">
              </SwiperSlide>
            </div>
            </ Swiper>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
          <a href="account-signup.html" className="btn btn-warning shadow-warning btn-lg text-dark">INSCRIBIRSE</a>
        </div>
        </div>

    </section>

    );
  };
export default Preguntas;
