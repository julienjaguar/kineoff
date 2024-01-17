import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faChartBar,
  faShoppingCart,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              style={{ width: "6rem", marginTop: "1rem" }}
              src={logo}
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{ marginTop: "4rem" }} className="social-icon">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                style={{ marginLeft: "1rem" }}
                href="https://www.telegram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
            <div className="mt-10 block text-center text-xs leading-5 mt-4">
              &copy; {new Date().getFullYear()} Copyright. All Rights Reserved
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
