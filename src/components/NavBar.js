import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logoo.png";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../index.css";
import "./Navbar.css"; // Ajoutez ce fichier CSS pour les styles personnalisés

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img style={{ width: "6rem" }} src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  href="https://twitter.com/kine_cto"
                  className="navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TWITTER
                  {/* <FontAwesomeIcon className="ok" icon={faTwitter} /> */}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://t.me/kinecto"
                  className="navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TELEGRAM
                  {/* <FontAwesomeIcon className="ok" icon={faTelegram} /> */}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://www.dextools.io/app/en/pairs"
                  className="navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CHART
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://www.dextools.io/app/en/pairs"
                  className="navbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
