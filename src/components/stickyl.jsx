import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import logo from './../assets/img/logo.jpg';
import Button from 'react-bootstrap/Button';
import './../assets/scss/_navbar.scss';
import './../assets/scss/_nav.scss';
import './sticky-navbar.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Stickyl =  () =>{
  return (

    <Navbar sticky="top" navbar="expand-lg" navbar="light" navbar="sticky" className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Brand href="#QuienesSomosPI">
      <img src={logo} width={277} alt="Partners Inmobiliario" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
    aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
    <Button variant="outline-success" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Inscribirse</Button>

    <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Button variant="outline-success" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">Inscribirse</Button>
    <a href="pages/sign-in.html" className="btn btn-secondary btn-sm fs-sm rounded d-none d-lg-inline-flex">
      <i className="bx bx-log-in fs-5 lh-1 me-1" />
      &nbsp;Iniciar Sesión
    </a>

    </Navbar.Collapse>

    </Container>
    </Navbar>

  );
};

export default Stickyl;
