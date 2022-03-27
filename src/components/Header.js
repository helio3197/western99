import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const checkMobileVersion = window.matchMedia('(min-width: 992px)');
  const mobileMenuCloseBtn = useRef(null);

  const [isDesktop, setIsDesktop] = useState(checkMobileVersion.matches);

  useEffect(() => {
    checkMobileVersion.addEventListener('change', (e) => {
      const state = e.matches;
      if (state) mobileMenuCloseBtn.current.click();
      setIsDesktop(state);
    });
  }, []);

  return (
    <header className="container-fluid p-0 navbar-bg shadow-nav" id="navbar">
      <div className="container-lg navbar navbar-expand-lg navbar-light">
        <button type="button" className="navbar-toggler border-0 p-0" data-bs-toggle="offcanvas" data-bs-target="#navbar-slide">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="mx-auto mx-lg-0">
          <img src=".assets/western99.png" alt="western99 logo" className="logo" />
        </Link>
        <nav
          className={`${(isDesktop) ? 'visible' : 'offcanvas offcanvas-start'} navbar-collapse border-0 align-items-stretch flex-lg-grow-0 ms-lg-auto`}
          tabIndex="-1"
          id="navbar-slide"
        >
          <div className="offcanvas-header align-self-stretch logo-container d-lg-none">
            <div className="offcanvas-title">
              <h1>Western99</h1>
            </div>
            <button
              type="button"
              className="btn-close"
              style={{ color: 'transparent' }}
              data-bs-dismiss="offcanvas"
              id="closeMenu"
              ref={mobileMenuCloseBtn}
            >
              Close
            </button>
          </div>
          <div className="navbar-nav navbar-items gap-lg-4 align-items-start align-items-lg-center ps-4 p-lg-0">
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
