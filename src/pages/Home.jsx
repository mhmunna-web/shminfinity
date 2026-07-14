import { useState } from "react";
import { Link } from "react-router-dom";
import FleetCarousel from "../components/FleetCarousel";

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        {/* Logo */}

        <Link
          to="/"
          className="logo"
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

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.PNG')",
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-subtitle">
            WELCOME TO SHM INFINITY
          </p>

          <h1>
            Premium Taxi Service
            <br />
            in Finland
          </h1>

          <h2>
            Trust in Motion
          </h2>

          <p className="hero-description">
            Experience luxury, safety and reliability
            with SHM Infinity.
            We provide premium taxi services
            across Finland with professional
            drivers and modern vehicles.
          </p>

          <div className="hero-buttons">

            <a
              href="https://wa.me/358449408543?text=Hello%20SHM%20Infinity,%20I'd%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Book Your Ride
            </a>

            <a
              href="#fleet"
              className="secondary-btn"
            >
              View Our Fleet
            </a>

          </div>

        </div>

      </section>      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="services"
      >

        <h2 className="section-title">
          Our Premium Services
        </h2>

        <div className="services-container">

          <div className="service-card">

            <h3>Airport Transfer</h3>

            <p>
              Comfortable airport pickup and
              drop-off across Finland.
            </p>

          </div>

          <div className="service-card">

            <h3>Business Travel</h3>

            <p>
              Luxury transportation for
              business meetings and
              corporate clients.
            </p>

          </div>

          <div className="service-card">

            <h3>City Taxi</h3>

            <p>
              Fast, safe and reliable rides
              anywhere in Finland.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="about"
      >

        <div className="about-image">

          <img
            src="/images/about/about-image.png"
            alt="About SHM Infinity"
          />

        </div>

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT SHM INFINITY
          </span>

          <h2>
            Premium Taxi Service
            <br />
            Across Finland
          </h2>

          <p>
            SHM Infinity provides premium taxi
            services with luxury vehicles,
            professional drivers and reliable
            transportation across Finland.

            Whether you need airport transfer,
            business travel or city taxi,
            we ensure a comfortable and safe
            journey every time.
          </p>

          <div className="about-features">

            <div>✓ Professional Drivers</div>

            <div>✓ Luxury Vehicles</div>

            <div>✓ Airport Transfer</div>

            <div>✓ Business Travel</div>

            <div>✓ Fixed Pricing</div>

            <div>✓ 24/7 Service</div>

          </div>

          <a
            href="#fleet"
            className="primary-btn"
          >
            Explore Our Fleet
          </a>

        </div>

      </section>      {/* ================= FLEET ================= */}

      <FleetCarousel />

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 SHM INFINITY. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Home;