import React from "react";


const SiliconBar =  () =>{
  return (
<header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
        <div className="container px-3">
          <a href="index.html" className="navbar-brand pe-3">
            <img src="assets/img/logo.jpg" width={237} alt="Partners Inmobiliarios" />
          </a>
          <div id="navbarNav" className="offcanvas offcanvas-end">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" aria-current="page">Landings</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-lg-flex">
                      <div className="mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0" style={{backgroundImage: 'url(assets/img/landings.jpg)', margin: '-1px'}} />
                      <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                        <ul className="list-unstyled mb-0">
                          <li><a href="index.html" className="dropdown-item">Template Intro Page</a></li>
                          <li><a href="landing-mobile-app-showcase.html" className="dropdown-item">Mobile App Showcase</a></li>
                          <li><a href="landing-saas-v1.html" className="dropdown-item">SaaS v.1</a></li>
                          <li><a href="landing-saas-v2.html" className="dropdown-item">SaaS v.2</a></li>
                          <li><a href="landing-financial.html" className="dropdown-item">Financial Consulting</a></li>
                          <li><a href="landing-online-courses.html" className="dropdown-item">Online Courses</a></li>
                          <li><a href="landing-medical.html" className="dropdown-item">Medical</a></li>
                          <li><a href="landing-software-company.html" className="dropdown-item">IT (Software) Company</a></li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                        <ul className="list-unstyled mb-0">
                          <li><a href="landing-conference.html" className="dropdown-item">Conference</a></li>
                          <li><a href="landing-digital-agency.html" className="dropdown-item">Digital Agency</a></li>
                          <li><a href="landing-blog.html" className="dropdown-item">Blog Homepage</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <div className="d-lg-flex pt-lg-3">
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">About</h6>
                        <ul className="list-unstyled mb-3">
                          <li><a href="about-v1.html" className="dropdown-item py-1">About v.1</a></li>
                          <li><a href="about-v2.html" className="dropdown-item py-1">About v.2</a></li>
                        </ul>
                        <h6 className="px-3 mb-2">Portfolio</h6>
                        <ul className="list-unstyled mb-3">
                          <li><a href="portfolio-grid.html" className="dropdown-item py-1">Grid View</a></li>
                          <li><a href="portfolio-list.html" className="dropdown-item py-1">List View</a></li>
                          <li><a href="portfolio-slider.html" className="dropdown-item py-1">Slider View</a></li>
                          <li><a href="portfolio-courses.html" className="dropdown-item py-1">Courses</a></li>
                          <li><a href="portfolio-single-project.html" className="dropdown-item py-1">Single Project</a></li>
                          <li><a href="portfolio-single-course.html" className="dropdown-item py-1">Single Course</a></li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Blog</h6>
                        <ul className="list-unstyled mb-3">
                          <li><a href="blog-list-with-sidebar.html" className="dropdown-item py-1">List View with Sidebar</a></li>
                          <li><a href="blog-grid-with-sidebar.html" className="dropdown-item py-1">Grid View with Sidebar</a></li>
                          <li><a href="blog-list-no-sidebar.html" className="dropdown-item py-1">List View no Sidebar</a></li>
                          <li><a href="blog-grid-no-sidebar.html" className="dropdown-item py-1">Grid View no Sidebar</a></li>
                          <li><a href="blog-simple-feed.html" className="dropdown-item py-1">Simple Feed</a></li>
                          <li><a href="blog-single.html" className="dropdown-item py-1">Single Post</a></li>
                          <li><a href="blog-podcast.html" className="dropdown-item py-1">Podcast</a></li>
                        </ul>
                        <h6 className="px-3 mb-2">Services</h6>
                        <ul className="list-unstyled mb-3">
                          <li><a href="services.html" className="dropdown-item py-1">Services Page</a></li>
                          <li><a href="services-single.html" className="dropdown-item py-1">Service Details</a></li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Contacts</h6>
                        <ul className="list-unstyled mb-3">
                          <li><a href="contacts-v1.html" className="dropdown-item py-1">Contacts v.1</a></li>
                          <li><a href="contacts-v2.html" className="dropdown-item py-1">Contacts v.2</a></li>
                        </ul>
                        <h6 className="px-3 mb-2">Specialty</h6>
                        <ul className="list-unstyled">
                          <li><a href="404-v1.html" className="dropdown-item py-1">404 Error v.1</a></li>
                          <li><a href="404-v2.html" className="dropdown-item py-1">404 Error v.2</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mi Cuenta</a>
                  <ul className="dropdown-menu">
                    <li><a href="account-details.html" className="dropdown-item">Perfil</a></li>
                    <li><a href="account-security.html" className="dropdown-item">Seguridad</a></li>
                    <li><a href="account-notifications.html" className="dropdown-item">Notificaciones</a></li>
                    <li><a href="account-messages.html" className="dropdown-item">Mensajes</a></li>
                    <li><a href="account-saved-items.html" className="dropdown-item">Datos Partner guardados</a></li>
                    <li><a href="account-collections.html" className="dropdown-item">Finalizados</a></li>
                    <li><a href="account-payment.html" className="dropdown-item">Pagos</a></li>
                    <li><a href="account-signin.html" className="dropdown-item">Iniciar Sesión</a></li>
                    <li><a href="account-signup.html" className="dropdown-item">Registrarse</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="offcanvas-footer border-top">
              <a href="account-signin.html" className="btn btn-primary w-100">
                <i className="bx bx-cart fs-4 lh-1 me-1" />
                &nbsp;Iniciar Sesión
              </a>
            </div>
          </div>
          <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" data-bs-toggle="mode">
            <input type="checkbox" className="form-check-input" id="theme-mode" />
            <label className="form-check-label d-none d-sm-block " htmlFor="theme-mode">Claro</label>
            <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Oscuro</label>
          </div>
          <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a href="account-signin.html" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i className="bx bx-cart fs-5 lh-1 me-1" />
            &nbsp;Iniciar Sesión
          </a>
        </div>
      </header>
    );

  };
  export default SiliconBar;
