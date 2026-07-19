import { useRef, useState } from "react";
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

    const message = ` SHM Infinity Driver Application

━━━━━━━━━━━━━━━━━━

 Full Name
${formData.fullName}

 Phone Number
${formData.phone}

 Email Address
${formData.email}

 City
${formData.city}

 Driving Experience
${formData.experience}

 Taxi Driver License
${formData.license}

━━━━━━━━━━━━━━━━━━

Submitted via
🌐 SHMINFINITY.FI`;

    window.open(
      `https://wa.me/358449408543?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="driver-page">
      {/* Hero Section */}

      <section className="driver-hero">
        <div className="driver-hero-overlay"></div>

        <div className="driver-hero-content">
          <span className="driver-tag">
            Join Our Premium Team
          </span>

          <h1>
            Drive with <span>SHM Infinity</span>
          </h1>

          <p>
            Become part of our premium Tesla chauffeur team and build
            your career with one of Finland's trusted luxury transport
            services.
          </p>

          <button
            className="driver-btn"
            onClick={scrollToForm}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Why Join */}

      <section className="why-join">
        <div className="section-header">
          <span>Why Join Us</span>

          <h2>Why Join SHM Infinity</h2>

          <p>
            Enjoy a premium working environment, flexible schedules,
            excellent earnings and the opportunity to drive a modern
            Tesla fleet.
          </p>
        </div>

        <div className="why-join-grid">

          <div className="join-card">
            <div className="join-icon">🚗</div>

            <h3>Premium Tesla Fleet</h3>

            <p>
              Drive clean, modern Tesla vehicles equipped with the
              latest technology, safety and comfort.
            </p>
          </div>

          <div className="join-card">
            <div className="join-icon">💰</div>

            <h3>Competitive Earnings</h3>

            <p>
              Earn attractive income while providing premium chauffeur
              services to our valued clients.
            </p>
          </div>

          <div className="join-card">
            <div className="join-icon">⏰</div>

            <h3>Flexible Schedule</h3>

            <p>
              Work full-time or part-time with a schedule that suits
              your lifestyle.
            </p>
          </div>

          <div className="join-card">
            <div className="join-icon">🎯</div>

            <h3>Performance Bonus</h3>

            <p>
              After reaching your target income, you keep
              <strong> 60% </strong>
              of every additional amount you earn.
            </p>
          </div>

        </div>

      </section>      {/* Quick Application */}

      <section
        className="application-section"
        ref={formRef}
      >
        <div className="section-header">
          <span>Quick Application</span>

          <h2>Apply in Less Than a Minute</h2>

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
            <label>Full Name *</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>

            <input
              type="tel"
              name="phone"
              placeholder="+358 40 123 4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>City *</label>

            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <h3>Professional Information</h3>
          </div>          <div className="form-group">
            <label>Driving Experience *</label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select your experience</option>
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
            <label>Taxi Driver License *</label>

            <select
              name="license"
              value={formData.license}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group full-width">
            <button
              type="submit"
              className="driver-btn submit-btn"
            >
              Submit Application via WhatsApp
            </button>
          </div>

        </form>

      </section>      {/* Thank You Section */}

      <section className="thank-you-section">

        <div className="thank-you-content">

          <span>Thank You</span>

          <h2>Ready to Drive with SHM Infinity?</h2>

          <p>
            Thank you for your interest in joining SHM Infinity.
            Once you submit your application via WhatsApp, our team
            will review it and contact you if you're shortlisted.
          </p>

          <a
            href="https://wa.me/358449408543"
            target="_blank"
            rel="noopener noreferrer"
            className="driver-btn"
          >
            Contact Us on WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}

export default DriverApplication;