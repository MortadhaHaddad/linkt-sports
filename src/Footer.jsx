import { useState, useEffect } from "react";
import "./Footer.css";
import backgroundImage from './assets/images/soccer.jpg';
import logoImage from "./assets/images/logo_linkt.png";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const checkUrlForPrivacy = () => {
      if (
        window.location.hash === "#privacy" ||
        window.location.search.includes("privacy=true")
      ) {
        setIsPrivacyOpen(true);
      }
    };

    // Check on mount
    checkUrlForPrivacy();

    // Listen to hash changes
    window.addEventListener("hashchange", checkUrlForPrivacy);
    return () => window.removeEventListener("hashchange", checkUrlForPrivacy);
  }, []);

  const openPrivacyModal = (e) => {
    e.preventDefault();
    setIsPrivacyOpen(true);
    window.location.hash = "privacy";
  };

  const closePrivacyModal = () => {
    setIsPrivacyOpen(false);
    if (window.location.hash === "#privacy") {
      window.history.replaceState(null, null, window.location.pathname);
    }
  };

  return (
    <div
      className="homepage-app7-root"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      {/* BLUE OVERLAY ON THE WHOLE BOTTOM SECTION BACKGROUND */}
      <div className="blue-overlay">
        
        {/* PREMIUM TRANSPARENT FOOTER */}
        <footer className="expensya-footer">
          <div className="footer-header">
            <div className="footer-logo-wrapper">
              <img src={logoImage} alt="Linkt Sports Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Linkt <span className="logo-subtext">Sports</span></span>
            </div>
          </div>

          <div className="footer-grid">
            {/* SOLUTIONS */}
            <div className="footer-column">
              <h4 className="footer-column-title">SOLUTIONS</h4>
              <ul className="footer-links">
                <li><a href="#mobile-app">Mobile App</a></li>
                <li><a href="#reservation">Venue Booking</a></li>
                <li><a href="#matchmaking">Player Matchmaking</a></li>
                <li><a href="#management">Complex Management</a></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="footer-column">
              <h4 className="footer-column-title">RESOURCES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#privacy" onClick={openPrivacyModal} className="highlighted-footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li><a href="#support">Help Center &amp; Support</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#blog">Blog &amp; News</a></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="footer-column">
              <h4 className="footer-column-title">COMPANY</h4>
              <ul className="footer-links">
                <li><a href="#about">About Linkt</a></li>
                <li><a href="#cofounders">Co-Founders</a></li>
                <li><a href="#values">Our Values</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            {/* CLIENTS */}
            <div className="footer-column">
              <h4 className="footer-column-title">CLIENTS</h4>
              <ul className="footer-links">
                <li><a href="#players">Player Space</a></li>
                <li><a href="#owners">Venue Owners</a></li>
                <li><a href="#partner-complex">Become a Partner</a></li>
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="footer-column contact-col">
              <h4 className="footer-column-title">GET IN TOUCH</h4>
              <div className="footer-contact-details">
                <p className="contact-office">Tunisia Office:</p>
                <p className="contact-address">14 City Ennour Medenine Nord,<br />Medenine, Tunisia 4100</p>
                <p className="contact-phone">Tel: +216 26 980 205</p>
                <p className="contact-email">
                  <a href="mailto:contact@linkt-sports.com">contact@linkt-sports.com</a>
                </p>
              </div>

              {/* Badges App Store & Google Play */}
              <div className="store-badges-container">
                {/* App Store Badge */}
                <a href="#app-store" className="store-badge">
                  <svg className="store-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.06-.52 2.82-1.33z"
                    />
                  </svg>
                  <div className="store-badge-text">
                    <span className="store-sub">Download on the</span>
                    <span className="store-main">App Store</span>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a href="#google-play" className="store-badge">
                  <svg className="store-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5,2c-0.27,0-0.53,0.07-0.76,0.2L12.26,10.2L5,2z M3.1,3.42C3.04,3.61,3,3.8,3,4v16c0,0.2,0.04,0.39,0.1,0.58L11.07,12.5L3.1,3.42z M12.96,10.9L5.7,3.64C5.93,3.5,6.19,3.42,6.46,3.42c0.27,0,0.53,0.07,0.76,0.2l11.19,6.46L12.96,10.9z M19.41,10.28l-3.8-2.19l-3.32,3.32l3.32,3.32l3.8-2.19c0.71-0.41,1.15-1.17,1.15-1.99S20.12,10.69,19.41,10.28z M5.7,16.36l7.26-7.26l5.46,5.46c-0.23,0.14-0.49,0.21-0.76,0.21c-0.27,0-0.53-0.07-0.76-0.2L5.7,16.36z"
                    />
                  </svg>
                  <div className="store-badge-text">
                    <span className="store-sub">GET IT ON</span>
                    <span className="store-main">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Linkt. Made with ❤️ for Sports. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* PRIVACY POLICY MODAL WITH DARK TRANSPARENT OVERLAY */}
      {isPrivacyOpen && (
        <div className="privacy-modal-overlay" onClick={closePrivacyModal}>
          <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="privacy-modal-close" onClick={closePrivacyModal} aria-label="Close">
              &times;
            </button>
            
            <div className="privacy-modal-header">
              <img src={logoImage} alt="Linkt Sports Logo" className="modal-logo" />
              <div>
                <h2 className="modal-title">Privacy Policy</h2>
                <p className="modal-subtitle">Linkt Sports — Last updated: July 8, 2026</p>
              </div>
            </div>

            <div className="privacy-modal-body">
              <p className="modal-intro">
                The <strong>Linkt Sports</strong> application is published by <strong>Linkt</strong>. This policy describes how we collect, use, and protect your personal data when you use our mobile application.
              </p>

              <hr className="modal-divider" />

              <section className="modal-section">
                <h4>1. Data Collected</h4>
                <p>We collect the following types of information to ensure the proper functioning of our services:</p>
                <ul>
                  <li><strong>Account information:</strong> Name, email address, and phone number when you register.</li>
                  <li><strong>Location data:</strong> If you authorize it, we collect your GPS coordinates to suggest nearby sports venues.</li>
                  <li><strong>Financial data:</strong> History of your bookings, wallet recharge transactions, and bonuses. We do not store your credit card details directly.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>2. Use of Data</h4>
                <p>Your data is used solely to:</p>
                <ul>
                  <li>Manage and validate your sports venue bookings.</li>
                  <li>Facilitate matchmaking with other players.</li>
                  <li>Display the nearest sports venues using geolocation.</li>
                  <li>Secure your account via OTP authentication.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>3. Sharing of Data</h4>
                <p>We do not sell or share your data with advertising third parties. The only shared data is:</p>
                <ul>
                  <li>With sports complex owners (stadiums) to validate your bookings (name and booking code only).</li>
                  <li>With competent authorities if required by law.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>4. User Rights (Data Deletion)</h4>
                <p>In accordance with data protection regulations, you can request the modification or complete deletion of your account and personal data at any time.</p>
                <div className="modal-callout">
                  To exercise this right, you can contact us directly at our support email address: 
                  <a href="mailto:linkt.sports.app@gmail.com" className="modal-email-link">linkt.sports.app@gmail.com</a>
                </div>
              </section>

              <section className="modal-section">
                <h4>5. Security</h4>
                <p>All application data is transmitted via secure encrypted connections (HTTPS) to our servers to ensure protection against unauthorized access.</p>
              </section>
            </div>

            <div className="privacy-modal-footer">
              <button className="modal-close-btn" onClick={closePrivacyModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
