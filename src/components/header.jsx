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

const Header =  () =>{
  return (

    <Navbar className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" fixed="bottom" navbar="expand-lg" navbar="light" navbar="sticky" className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" bg="light" expand="lg">
      <Container fluid className="container px-3"
      >
        <Navbar.Brand href="#QuienesSomosPI" className="navbar-brand pe-3">
          <img src={logo} width={277} alt="Partners Inmobiliario" />
        </Navbar.Brand>
        <Nav id="navbarNav" className="offcanvas offcanvas-end">
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
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
        </Nav>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
    <Nav.Link href="#action1">Partners Inmobiliarios</Nav.Link>
    <NavDropdown title="Link" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action3">Mi Cuenta</NavDropdown.Item>
    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action5">
      Something else here
    </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#" disabled>
    Link
    </Nav.Link>
    </Nav>
    <Form className="d-flex">

    <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
      <i className="bx bx-log-in fs-5 lh-1 me-1" />
      &nbsp;Iniciar Sesión
    </a>
    <Button variant="outline-success" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Inscribirse</Button>

    <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Button variant="outline-success" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">Inscribirse</Button>
    <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
      <i className="bx bx-log-in fs-5 lh-1 me-1" />
      &nbsp;Iniciar Sesión
    </a>
    </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>

  );
};

export default Header;
