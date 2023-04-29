import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer
      className="footer headingtag"
      style={{ backgroundColor: "#F5EBEB", color: "#1d283e" }}
    >
      <Container>
        <div className="footer-top">
          <div className="footer-col">
            <h4>
              <strong>Connect with us</strong>
            </h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} /> (123) 456-7890
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@mywebsite.com
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, Anytown,
                USA
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>
              <strong>Join our mailing list</strong>
            </h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <strong>Subscribe</strong>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; <strong>2023 All rights reserved.</strong>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
