import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        {/* Logo */}

        <Link to="/" className="logo">
          <img
            src="/images/logo/shm-logo.PNG"
            alt="SHM Infinity"
          />

          <span className="logo-text">
            SHMINFINITY<span>.FI</span>
          </span>
        </Link>

        {/* Desktop Menu */}

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#fleet">Fleet</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <a
          href="#fleet"
          onClick={() => setMenuOpen(false)}
        >
          Fleet
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;