import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  SiVisa,
  SiMastercard,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>SHM <span>Infinity</span></h2>

          <p>
            Premium transportation services across Finland.
            <br />
            Your journey, our commitment.
          </p>

          <div className="footer-social">

            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><MdEmail /></a>

          </div>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/fleet">Fleet</Link>
          <Link to="/services">Services</Link>
          <Link to="/airport-transfer">Airport Transfer</Link>

        </div>

        <div className="footer-links">

          <h4>Our Services</h4>

          <Link to="/services/airport-transfer">Airport Transfer</Link>
          <Link to="/services/long-distance">Long Distance</Link>
          <Link to="/services/business-travel">Business Travel</Link>
          <Link to="/services/tours-family">Tours & Family Travel</Link>

        </div>

        <div className="footer-contact">

          <h4>Contact Us</h4>

          <p><FiPhone /> +358 46 922 0929</p>

          <p><MdEmail /> info@shminfinity.com</p>

          <p><MdLocationOn /> Vantaa, Finland</p>

        </div>

        <div className="footer-payments">

          <h4>We Accept</h4>

          <div className="payment-icons">

            <SiVisa />
            <SiMastercard />
            <SiApplepay />
            <SiGooglepay />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2025 SHM Infinity. All Rights Reserved.</p>

        <div>

          <Link to="/privacy-policy">Privacy Policy</Link>

          <span>|</span>

          <Link to="/terms">Terms & Conditions</Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;