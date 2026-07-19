import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
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
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <a href="/#fleet">Fleet</a>
            </li>

            <li>
              <a href="/#services">Services</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <NavLink to="/booking">
                Booking
              </NavLink>
            </li>

            <li>
              <NavLink to="/driver-application">
                Driver Application
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact">
                Support
              </NavLink>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <a href="/#fleet" onClick={closeMenu}>
          Fleet
        </a>

        <a href="/#services" onClick={closeMenu}>
          Services
        </a>

        <a href="/#about" onClick={closeMenu}>
          About
        </a>

        <NavLink to="/booking" onClick={closeMenu}>
          Booking
        </NavLink>

        <NavLink to="/driver-application" onClick={closeMenu}>
          Driver Application
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Support
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;