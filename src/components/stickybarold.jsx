import React from "react";
import logo from './../assets/img/logo.jpg';
import bienvenido from './../assets/img/bienvenido.jpg';

import portal from './../assets/img/landings.jpg';
import './sticky-navbar.js';
import './../assets/scss/theme.scss'
import './../assets/js/src/theme.js'
const StickyBar =  () =>{
  return (

          <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
            <div className="container px-3">
              <a href="index.html" className="navbar-brand pe-3">
                <img src={bienvenido} width={277} alt="Partners Inmobiliario" />
              </a>
              <div id="navbarNav" className="offcanvas offcanvas-end">
                <div className="offcanvas-header border-bottom">
                  <h5 className="offcanvas-title">Menú</h5>
                  <div
                    role="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={() => this.setState({ showSomething: true })}
                    onMouseEnter={() => this.setState({ showSomething: true })}
                  >
                    {}
                  </div>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <div
                        role="menuitem"
                        className="nav-link dropdown-toggle active"
                        data-bs-toggle="dropdown"
                        aria-current="page"
                        onClick={() => this.setState({ showSomething: true })}
                        onMouseEnter={() => this.setState({ showSomething: true })}
                      >
                      {'Video'}
                      </div>
                      <div className="dropdown-menu p-0">
                        <div className="d-lg-flex">
                          <div className="mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0" style={{backgroundImage: `url(${portal})`, margin: '-1px'}} />
                          <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                            <ul className="list-unstyled mb-0">

                              <li>
                                <a
                                  href={'landing.html'}
                                  className="dropdown-item"
                                  onMouseEnter={() => this.setState({ showSomething: true })}
                                >
                                {'Partners Inmobiliarios'}</a>
                              </li>
                              <li>
                                <a
                                  href={'landing.html'}
                                  className="dropdown-item"
                                  onMouseEnter={() => this.setState({ showSomething: true })}
                                >
                                {'Seamos Partners'}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  href={'landing.html'}
                                  className="dropdown-item"
                                  onMouseEnter={() => this.setState({ showSomething: true })}
                                >
                                {'¿Qué es un partner?'}
                                </a>
                              </li>
                              <li>
                                <a
                                  href={'serpartner.html'}
                                  className="dropdown-item"
                                  onMouseEnter={() => this.setState({ showSomething: true })}
                                >
                                {'¿Cómo puedo ser un partner?  '}
                                </a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <div
                        role="menuitem"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        onClick={() => this.setState({ showSomething: true })}
                        onMouseEnter={() => this.setState({ showSomething: true })}
                      >
                      {'¿Qué es un partner?'}
                      </div>

                        <div class="dropdown-menu">
                          <div class="d-lg-flex pt-lg-3">
                            <div class="mega-dropdown-column">
                              <h6 class="px-3 mb-2">Sobre Nosotros</h6>
                              <ul class="list-unstyled mb-3">
                                <li><a href="pages/about-v1.html" class="dropdown-item py-1">Partners Inmobiliarios</a></li>
                                <li><a href="about-v2.html" class="dropdown-item py-1">Seamos Partners</a></li>
                              </ul>

                            </div>
                            <div class="mega-dropdown-column">


                              <h6 class="px-3 mb-2">Services</h6>

                            </div>

                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <div
                          role="menuitem"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          onClick={() => this.setState({ showSomething: true })}
                          onMouseEnter={() => this.setState({ showSomething: true })}
                        >
                        {'Mi Cuenta'}
                        </div>

                          <div class="dropdown-menu">
                            <div class="d-lg-flex pt-lg-3">
                              <div class="mega-dropdown-column">
                                <h6 class="px-3 mb-2">Sobre Nosotros</h6>
                                <ul class="list-unstyled mb-3">
                                  <li><a href="pages/about-v1.html" class="dropdown-item py-1">Partners Inmobiliarios</a></li>
                                  <li><a href="about-v2.html" class="dropdown-item py-1">Seamos Partners</a></li>
                                </ul>

                              </div>
                              <div class="mega-dropdown-column">


                                <h6 class="px-3 mb-2">Services</h6>

                              </div>

                            </div>
                          </div>
                        </li>
                    <li className="nav-item dropdown">
                    <div
                      role="menuitem"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      onClick={() => this.setState({ showSomething: true })}
                      onMouseEnter={() => this.setState({ showSomething: true })}
                    >
                    {'Mi Cuenta'}
                    </div>
                      <div class="dropdown-menu">
                        <div class="d-lg-flex pt-lg-3">
                          <div class="mega-dropdown-column">
                          <li><a href="account-details.html" class="dropdown-item">Perfil</a></li>
                            <h6 class="px-3 mb-2">Sobre Nosotros</h6>
                            <ul class="list-unstyled mb-3">
                              <li><a href="pages/about-v1.html" class="dropdown-item py-1">Partners Inmobiliarios</a></li>
                              <li><a href="about-v2.html" class="dropdown-item py-1">Seamos Partners</a></li>
                            </ul>

                          </div>
                          <div class="mega-dropdown-column">



                          <li><a href="account-security.html" class="dropdown-item">Seguridad</a></li>
                          <li><a href="account-notifications.html" class="dropdown-item">Notificaciones</a></li>
                          <li><a href="account-messages.html" class="dropdown-item">Mensajes</a></li>
                          <li><a href="account-saved-items.html" class="dropdown-item">Datos Partner guardados</a></li>
                          <li><a href="account-collections.html" class="dropdown-item">Finalizados</a></li>
                          <li><a href="account-payment.html" class="dropdown-item">Pagos</a></li>
                          <li><a href="account-signin.html" class="dropdown-item">Iniciar Sesión</a></li>
                          <li><a href="account-signup.html" class="dropdown-item">Registrarse</a></li>



                          </div>

                        </div>
                      </div>

                    </li>


                  </ul>
                </div>
                <div id="navbarNav" className="offcanvas offcanvas-end">
                test
                </div>

                <div className="offcanvas-footer border-top">
                  <a href="pages/sign-in.html" className="btn btn-secondary w-100">
                    <i className="bx bx-log-in fs-4 lh-1 me-1" />
                    &nbsp;Iniciar Sesión
                  </a>
                </div>
              </div>

              <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>


            </div>

          </header>
  );
};


export default StickyBar;
