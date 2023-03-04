import React from "react";
import logo from './../assets/img/logo.jpg';
import portal from './../assets/img/landings.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './../assets/scss/_navbar.scss';
import './../assets/scss/_nav.scss';
import './sticky-navbar.js';
import './../assets/scss/theme.scss'
import './../assets/js/src/theme.js'
import './../assets/js/src/components/sticky-navbar';

import './sticky-navbar.js';

const NavBarFooter =  () =>{
  return (

    <Navbar className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" fixed="bottom" navbar="expand-lg" navbar="light" navbar="sticky" className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" bg="light" expand="lg">

        <Navbar.Brand href="#QuienesSomosPI" className="navbar-brand pe-3">
        <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
          <i className="bx bx-log-in fs-5 lh-1 me-1" />
          &nbsp;Registrarse
        </a>
          <img src={logo} width={277} alt="Partners Inmobiliario" />

        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll">           <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
                  <i className="bx bx-log-in fs-5 lh-1 me-1" />
                  &nbsp;Registrarse
                </a></Navbar.Toggle>





    </Navbar>

  );
};

export default NavBarFooter;
