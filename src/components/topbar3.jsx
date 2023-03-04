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

import './../assets/scss/theme.scss'
import './../assets/js/src/theme.js'

const NavBarLogo =  () =>{
  return (

    <Navbar className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky"
    sticky="top" navbar="expand-lg" navbar="light" navbar="sticky"
     bg="light" expand="lg">
     <Navbar.Brand href="#QuienesSomosPI" className="navbar-brand pe-3">
         <img src={logo} width={277} alt="Partners Inmobiliario" />
       </Navbar.Brand>
       <div className="container px-3">
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
         </div>
         <div className="offcanvas-body">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item dropdown">
               <div
                 role="menuitem"
                 className="nav-link  active"
                 data-bs-toggle="dropdown"
                 aria-current="page"
                 onClick={() => this.setState({ showSomething: true })}
                 onMouseEnter={() => this.setState({ showSomething: true })}
               >
               {'Home'}
               </div>

             </li>
             <li>    <div
                   role="menuitem"
                   className="nav-link "
                   data-bs-toggle="dropdown"
                   onClick={() => this.setState({ showSomething: true })}
                   onMouseEnter={() => this.setState({ showSomething: true })}
                 >
                 {'Video'}
                 </div></li>
             <li class="nav-item dropdown">
               <div
                 role="menuitem"
                 className="nav-link "
                 data-bs-toggle="dropdown"
                 onClick={() => this.setState({ showSomething: true })}
                 onMouseEnter={() => this.setState({ showSomething: true })}
               >
               {'¿Cómo Funciona?'}
               </div>


               </li>
               <li class="nav-item dropdown">
                 <div
                   role="menuitem"
                   className="nav-link "
                   data-bs-toggle="dropdown"
                   onClick={() => this.setState({ showSomething: true })}
                   onMouseEnter={() => this.setState({ showSomething: true })}
                 >
                 {'Preguntas Frecuentes'}
                 </div>


                 </li>
             <li className="nav-item dropdown">
             <div
               role="menuitem"
               className="nav-link "
               data-bs-toggle="dropdown"
               onClick={() => this.setState({ showSomething: true })}
               onMouseEnter={() => this.setState({ showSomething: true })}
             >
             {'Mi Cuenta'}
             </div>

             </li>


           </ul>
         </div>
         <div id="navbarNav" className="offcanvas offcanvas-end">

         </div>



         <div className="offcanvas-footer border-top">
           <a href="pages/sign-in.html" className="btn btn-secondary w-100">
             <i className="bx bx-log-in fs-4 lh-1 me-1" />
             &nbsp;Iniciar Sesión
           </a>
         </div>

</div>

       </Nav>
</div>


  );
};

export default NavBarFooter;
