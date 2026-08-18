import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAdminOpen(false);
  };

  const BUSINESS_OS_LOGIN =
    "https://shm-business-os.vercel.app/login";

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

            {/* Admin / User */}

            <li
              style={{
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setAdminOpen(!adminOpen)
                }
                style={{
                  background: "transparent",
                  border:
                    "1px solid rgba(212,175,55,.35)",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Admin ▾
              </button>

              {adminOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    right: 0,
                    width: "140px",
                    background: "#0b0b0b",
                    border:
                      "1px solid rgba(212,175,55,.35)",
                    borderRadius: "12px",
                    padding: "8px",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,.4)",
                    zIndex: 10000,
                  }}
                >
                  {/* Admin */}

                  <a
                    href={BUSINESS_OS_LOGIN}
                    onClick={closeMenu}
                    style={{
                      display: "block",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Admin
                  </a>

                  {/* User */}

                  <a
                    href={BUSINESS_OS_LOGIN}
                    onClick={closeMenu}
                    style={{
                      display: "block",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    User
                  </a>
                </div>
              )}
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setAdminOpen(false);
            }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >
        <NavLink
          to="/"
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <a
          href="/#fleet"
          onClick={closeMenu}
        >
          Fleet
        </a>

        <a
          href="/#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="/#about"
          onClick={closeMenu}
        >
          About
        </a>

        <NavLink
          to="/booking"
          onClick={closeMenu}
        >
          Booking
        </NavLink>

        <NavLink
          to="/driver-application"
          onClick={closeMenu}
        >
          Driver Application
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          Support
        </NavLink>

        {/* Mobile Admin / User */}

        <button
          type="button"
          onClick={() =>
            setAdminOpen(!adminOpen)
          }
          style={{
            width: "fit-content",
            background: "transparent",
            border:
              "1px solid rgba(212,175,55,.35)",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: "30px",
            fontSize: "20px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Admin ▾
        </button>

        {adminOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              paddingLeft: "10px",
            }}
          >
            {/* Admin */}

            <a
              href={BUSINESS_OS_LOGIN}
              onClick={closeMenu}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Admin
            </a>

            {/* User */}

            <a
              href={BUSINESS_OS_LOGIN}
              onClick={closeMenu}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              User
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;