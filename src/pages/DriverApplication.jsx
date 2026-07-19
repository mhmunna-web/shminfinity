import { useRef, useState } from "react";
import SEO from "../components/seo/SEO";

import "../styles/DriverApplication.css";

function DriverApplication() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    license: "",
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🚖 SHM Infinity Driver Application

━━━━━━━━━━━━━━━━━━

👤 Full Name
${formData.fullName}

📞 Phone Number
${formData.phone}

📧 Email Address
${formData.email}

📍 City
${formData.city}

🚗 Driving Experience
${formData.experience}

🪪 Taxi Driver License
${formData.license}

━━━━━━━━━━━━━━━━━━

Submitted via
🌐 https://www.shminfinity.fi`;

    window.open(
      `https://wa.me/358449408543?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title="Taxi Driver Jobs Finland | SHM Infinity"
        description="Apply to become a taxi driver with SHM Infinity in Finland. Drive premium vehicles, enjoy flexible schedules, competitive earnings, and submit your application online."
        keywords="Taxi Driver Jobs Finland, Taxi Driver Application, Chauffeur Jobs Finland, Taxi Career Finland, Tesla Taxi Driver, SHM Infinity"
        url="https://www.shminfinity.fi/driver-application"
      />

      <main className="driver-page">        {/* Hero Section */}

        <section
          className="driver-hero"
          aria-labelledby="driver-hero-title"
        >
          <div className="driver-hero-overlay"></div>

          <div className="driver-hero-content">
            <span className="driver-tag">
              Join Our Premium Team
            </span>

            <h1 id="driver-hero-title">
              Drive with <span>SHM Infinity</span>
            </h1>

            <p>
              Become part of our premium Tesla chauffeur team and build
              your career with one of Finland's trusted luxury transport
              services.
            </p>

            <button
              type="button"
              className="driver-btn"
              onClick={scrollToForm}
              aria-label="Scroll to the taxi driver application form"
            >
              Apply Now
            </button>
          </div>
        </section>        {/* Why Join Section */}

        <section
          className="why-join"
          aria-labelledby="why-join-title"
        >
          <div className="section-header">
            <span>Why Join Us</span>

            <h2 id="why-join-title">
              Why Join SHM Infinity
            </h2>

            <p>
              Enjoy a premium working environment, flexible schedules,
              excellent earnings, and the opportunity to drive a modern
              Tesla fleet across Finland.
            </p>
          </div>

          <div className="why-join-grid">

            <article className="join-card">
              <div
                className="join-icon"
                aria-hidden="true"
              >
                🚗
              </div>

              <h3>Premium Tesla Fleet</h3>

              <p>
                Drive clean, modern Tesla vehicles equipped with the
                latest technology, advanced safety features, and premium
                comfort.
              </p>
            </article>

            <article className="join-card">
              <div
                className="join-icon"
                aria-hidden="true"
              >
                💰
              </div>

              <h3>Competitive Earnings</h3>

              <p>
                Earn attractive income while providing premium chauffeur
                services to our valued clients throughout Finland.
              </p>
            </article>

            <article className="join-card">
              <div
                className="join-icon"
                aria-hidden="true"
              >
                ⏰
              </div>

              <h3>Flexible Schedule</h3>

              <p>
                Choose full-time or part-time work with a schedule that
                fits your lifestyle and personal commitments.
              </p>
            </article>

            <article className="join-card">
              <div
                className="join-icon"
                aria-hidden="true"
              >
                🎯
              </div>

              <h3>Performance Bonus</h3>

              <p>
                After reaching your target income, you keep
                <strong> 60% </strong>
                of every additional amount you earn, rewarding your
                performance and dedication.
              </p>
            </article>

          </div>
        </section>        {/* Quick Application */}

        <section
          className="application-section"
          ref={formRef}
          aria-labelledby="application-title"
        >
          <div className="section-header">
            <span>Quick Application</span>

            <h2 id="application-title">
              Apply in Less Than a Minute
            </h2>

            <p>
              Complete the form below and we'll review your application.
              Suitable candidates will be contacted as soon as possible.
            </p>
          </div>

          <form
            className="application-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group full-width">
              <h3>Personal Information</h3>
            </div>

            <div className="form-group">
              <label htmlFor="fullName">
                Full Name *
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number *
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+358 40 123 4567"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">
                City *
              </label>

              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                autoComplete="address-level2"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <h3>Professional Information</h3>
            </div>          <div className="form-group">
            <label htmlFor="experience">
              Driving Experience *
            </label>

            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">
                Select your experience
              </option>

              <option value="Less than 1 Year">
                Less than 1 Year
              </option>

              <option value="1 - 3 Years">
                1 - 3 Years
              </option>

              <option value="3 - 5 Years">
                3 - 5 Years
              </option>

              <option value="More than 5 Years">
                More than 5 Years
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="license">
              Taxi Driver License *
            </label>

            <select
              id="license"
              name="license"
              value={formData.license}
              onChange={handleChange}
              required
            >
              <option value="">
                Select an option
              </option>

              <option value="Yes">
                Yes
              </option>

              <option value="No">
                No
              </option>
            </select>
          </div>

          <div className="form-group full-width">
            <button
              type="submit"
              className="driver-btn submit-btn"
              aria-label="Submit driver application via WhatsApp"
            >
              Submit Application via WhatsApp
            </button>
          </div>

        </form>
      </section>        {/* Thank You Section */}

        <section
          className="thank-you-section"
          aria-labelledby="thank-you-title"
        >
          <div className="thank-you-content">
            <span>Thank You</span>

            <h2 id="thank-you-title">
              Ready to Drive with SHM Infinity?
            </h2>

            <p>
              Thank you for your interest in joining SHM Infinity.
              Once you submit your application via WhatsApp, our team
              will carefully review it and contact you if you are
              shortlisted.
            </p>

            <a
              href="https://wa.me/358449408543?text=Hello%20SHM%20Infinity,%20I%20would%20like%20to%20apply%20as%20a%20driver."
              target="_blank"
              rel="noopener noreferrer"
              className="driver-btn"
              aria-label="Contact SHM Infinity on WhatsApp"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

export default DriverApplication;