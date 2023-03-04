import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import logo from './../assets/img/logo.jpg';

const Barra =  () =>{
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" bg="light" className="header">
      <Container className="px-3">
      <Navbar.Brand href="#home" className="pe-3">
        <img src={logo} width="237" alt="Partners Inmobiliarios"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className="offcanvas offcanvas-end">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title">Menú</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

      </Nav>
      </Container>
    </Navbar>
  );
};


export default Barra;
