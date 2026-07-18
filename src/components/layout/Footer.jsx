import { SiVisa, SiMastercard, SiApplepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>
            SHM <span>Infinity</span>
          </h2>

          <p>
            Premium transportation services across Finland.
            <br />
            Your journey, our commitment.
          </p>
        </div>

        <div className="footer-center">
          <p>© 2025 SHM Infinity. All Rights Reserved.</p>
        </div>

        <div className="footer-right">
          <h4>We Accept</h4>

          <div className="payment-icons">
            <SiVisa />
            <SiMastercard />
            <SiApplepay />
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;