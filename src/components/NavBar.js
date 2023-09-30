import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <Navbar expand="md" className="navbar-show">
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              smooth
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/Events"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Events")}
            >
              Events
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/Sponsors"
              className={
                activeLink === "Sponsors" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Sponsors")}
            >
              Sponsors
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/ContactUs"
              className={
                activeLink === "ContactUs"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("ContactUs")}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth to="/AboutTeams" className=
              {activeLink === "ContactUs"
                ? "active navbar-link"
                : "navbar-link"}
              onClick={() => onUpdateActiveLink("AboutTeams")}> Teams
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <HashLink to="/#project">
              <button className="vvd">
                <span>Let’s Explore</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}