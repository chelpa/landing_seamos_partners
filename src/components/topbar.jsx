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
import seamos_partnersL from './../assets/img/seamos_partners.jpg';
import './sticky-navbar.js';

const NavBarFooter =  () =>{
  return (



    <Navbar className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" sticky="top" navbar="expand-lg" navbar="light" navbar="sticky" className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" bg="light" expand="lg">
    <Navbar.Brand href="#QuienesSomosPI" className="navbar-brand pe-3">
      <img src={logo} width={277} alt="Partners Inmobiliario" />
    </Navbar.Brand>

    <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
    </button>

    {/*  <Container fluid className="container px-3"
      >
         <Navbar.Brand href="#QuienesSomosPI" className="navbar-brand pe-3">
          <img src={logo} width={277} alt="Partners Inmobiliario" />
        </Navbar.Brand>
        <Nav id="navbarNav" className="offcanvas offcanvas-end">
        </Nav>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >

    <NavDropdown title="Link" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action3">Mi Cuenta</NavDropdown.Item>

    <NavDropdown.Divider />
    <NavDropdown.Item href="#action5">
      Something else here
    </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#" disabled>
    Link
    </Nav.Link>
    </Nav>

    <Button variant="outline-success" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></Button>


    <Form className="d-flex">



    </Form>
     </Navbar.Collapse>
    </Container>
    */}
      <div class="position-absolute top-0 end-0">    <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i className="bx bx-log-in fs-5 lh-1 me-1 position-left" />
            &nbsp;Iniciar Sesión
          </a></div>

    </Navbar>

  );
};

export default NavBarFooter;
