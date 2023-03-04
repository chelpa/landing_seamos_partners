import React from "react";
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.css';
import heroimg from '../../assets/img/landing/financial/hero-img.jpg';

const FiftyPercent =  () =>{
  return (

      <section className="pt-lg-4 mt-lg-3">
        <div className="position-relative overflow-hidden">

          <div className="container-fluid position-relative position-lg-absolute top-0 start-0 h-100">
            <div className="row h-100 me-n4 me-n2">
              <div className="col-lg-7 position-relative">
                <div className="d-none d-sm-block d-lg-none" style={{height: '400px'}} />
                <div className="d-sm-none" style={{height: '300px'}} />

                <div data-jarallax  className="jarallax position-absolute top-0 start-0 w-100 h-100 rounded-3 rounded-start-0 overflow-hidden" data-speed="0.5">
                  <img className="jarallax-img" src={heroimg} alt=""/>

                </div>
              </div>
            </div>
          </div>
          <div className="container position-relative zindex-5 pt-lg-5 px-0 px-lg-3">
            <div className="row pt-lg-5 mx-n4 mx-lg-n3">
              <div className="col-xl-6 col-lg-7 offset-lg-5 offset-xl-6 pb-5">

                <div className="card bg-dark border-light overflow-hidden py-4 px-2 p-sm-4">
                  <span className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(255,255,255,.05)'}} />
                  <div className="card-body position-relative zindex-5">
                    <p className="fs-xl fw-bold text-warning text-uppercase mb-3">¿Sabes de una propiedad en venta o arriendo?</p>
                    <h1 className="display-5 text-light pb-3 mb-3">Asociate con nosotros </h1>
                    <p className="fs-lg text-light opacity-70 mb-5"> Si nos refieres al dueño y Partners Inmobiliarios concreta la transacción, entonces tú te llevas la mitad de la comisión. ¡Desde la comodidad de tu hogar! </p>
                    <div className="d-flex flex-column flex-sm-row">
                      <a href="http://eepurl.com/ij27vT" className="btn btn-warning text-dark shadow-warning btn-lg mb-3 mb-sm-0 me-sm-4 ">INSCRIBIRSE</a>
                      <a href="#QueEsUnPartner" className="btn btn-outline-primary btn-lg text-warning">
                        ¿Qué es un Partner?
                        <i className="bx bx-right-arrow-alt fs-4 lh-1 ms-2 me-n1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 offset-lg-8 offset-xxl-9 pt-lg-5 mt-xxl-5">

                <ul className="list-unstyled mb-0 px-4 px-lg-0">
                  <li className="d-flex align-items-center pb-1 mb-2">
                    <i className="bx bx-map fs-xl text-primary me-2" />
                    Tobalaba, Providencia, Chile
                  </li>
                  <li className="d-flex align-items-center pb-1 mb-2">
                    <i className="bx bx-envelope fs-xl text-primary me-2" />
                    <a href="mailto:seamos_partners@gmail.com" className="nav-link fw-normal p-0">seamos_partners@gmail.com</a>
                  </li>
                  <li className="d-flex align-items-center pb-1 mb-2">
                    <i className="bx bx-phone-call fs-xl text-primary me-2" />
                    <a href="tel:4065550120" className="nav-link fw-normal p-0">(+569) 9696987</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>





  );
jarallax(document.querySelectorAll(".jarallax"));
};
export default FiftyPercent;
