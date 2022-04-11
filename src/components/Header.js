import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';

const Header = () => {
  const checkMobileVersion = window.matchMedia('(max-width: 992px)');

  const [isDesktop, setIsDesktop] = useState(checkMobileVersion.matches);

  checkMobileVersion.addEventListener('change', (e) => {
    const state = e.matches;
    setIsDesktop(state);
  });

  return (
    <Navbar as="header" expand="lg" bg="primary">
      <Container fluid="lg">
        <Navbar.Toggle className="navbar-toggler border-0 p-0" aria-controls="navbar-sidemenu" />
        <Link to="/" className="mx-auto mx-lg-0">
          <img src=".assets/western99.png" alt="western99 logo" className="logo" />
        </Link>
        {isDesktop ? (
          <Navbar.Offcanvas
            as="nav"
            className="border-0 align-items-stretch"
            tabIndex="-1"
            id="navbar-sidemenu"
          >
            <Offcanvas.Header className="align-self-stretch logo-container border-bottom" closeButton>
              <Offcanvas.Title>
                <h1>Western99</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-start ps-4">
              <Nav>
                <NavLink to="/services" className="nav-item nav-link p-1">Servicios</NavLink>
                <NavLink to="/about" className="nav-item nav-link p-1">Sobre Nosotros</NavLink>
                <NavLink to="/faq" className="nav-item nav-link p-1">Preguntas Frequentes</NavLink>
                <NavLink to="/contact" className="nav-item nav-link p-1">Contacto</NavLink>
                <div className="button-join">
                  <Link to="/account">Mi Cuenta</Link>
                </div>
                <div className="button-join">
                  <Link to="/new-operation">Envía dinero</Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        ) : (
          <Nav as="nav" className="gap-4 align-items-center">
            <NavLink to="/services" className="nav-item nav-link p-1">Servicios</NavLink>
            <NavLink to="/about" className="nav-item nav-link p-1">Sobre Nosotros</NavLink>
            <NavLink to="/faq" className="nav-item nav-link p-1">Preguntas Frequentes</NavLink>
            <NavLink to="/contact" className="nav-item nav-link p-1">Contacto</NavLink>
            <div className="button-join">
              <Link to="/account">Mi Cuenta</Link>
            </div>
            <div className="button-join">
              <Link to="/new-operation">Envía dinero</Link>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
