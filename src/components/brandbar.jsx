import React from "react";
import logo from './../assets/img/logo.jpg';
import bienvenido from './../assets/img/bienvenido.jpg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../assets/scss/_navbar.scss';
import './../assets/scss/_nav.scss';
import './sticky-navbar.js';
import './../assets/scss/theme.scss'
import './../assets/js/src/theme.js'
import './../assets/js/src/components/sticky-navbar';
const BrandBar =  () =>{
  return (

    <>
<Navbar bg="light">

<Navbar.Brand href="#home">          <img src={bienvenido} width={277} alt="Partners Inmobiliario" />
</Navbar.Brand>

</Navbar>


</>
  );
};


export default BrandBar;
