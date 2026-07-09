import { useState, useEffect } from "react";
import "./App7.css";
import backgroundImage from './assets/images/soccer.jpg';
import logoImage from "./assets/images/logo_linkt.png";

export default function HomePage() {
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
        
        {/* FOOTER SOMBRE TRANSPARENT COMME LA PHOTO */}
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
                <li><a href="#mobile-app">Application mobile</a></li>
                <li><a href="#reservation">Réservation de terrains</a></li>
                <li><a href="#matchmaking">Matchmaking de joueurs</a></li>
                <li><a href="#management">Gestion de complexes</a></li>
              </ul>
            </div>

            {/* RESSOURCES */}
            <div className="footer-column">
              <h4 className="footer-column-title">RESSOURCES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#privacy" onClick={openPrivacyModal} className="highlighted-footer-link">
                    Politique de Confidentialité
                  </a>
                </li>
                <li><a href="#support">Centre d&apos;aide & Support</a></li>
                <li><a href="#terms">Conditions d&apos;utilisation</a></li>
                <li><a href="#blog">Blog & Actualités</a></li>
              </ul>
            </div>

            {/* ENTREPRISE */}
            <div className="footer-column">
              <h4 className="footer-column-title">ENTREPRISE</h4>
              <ul className="footer-links">
                <li><a href="#about">À propos de Linkt</a></li>
                <li><a href="#cofounders">Co-Fondateurs</a></li>
                <li><a href="#values">Nos Valeurs</a></li>
                <li><a href="#careers">Offres d&apos;emploi</a></li>
              </ul>
            </div>

            {/* CLIENTS */}
            <div className="footer-column">
              <h4 className="footer-column-title">CLIENTS</h4>
              <ul className="footer-links">
                <li><a href="#players">Espace Joueurs</a></li>
                <li><a href="#owners">Propriétaires de Stades</a></li>
                <li><a href="#partner-complex">Devenir Partenaire</a></li>
              </ul>
            </div>

            {/* ENTRER EN CONTACT */}
            <div className="footer-column contact-col">
              <h4 className="footer-column-title">ENTRER EN CONTACT</h4>
              <div className="footer-contact-details">
                <p className="contact-office">Bureau Tunisie:</p>
                <p className="contact-address">14 City Ennour Medenine Nord,<br />Medenine, Tunisie 4100</p>
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
                    <span className="store-sub">Télécharger dans l&apos;</span>
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
                    <span className="store-sub">DISPONIBLE SUR</span>
                    <span className="store-main">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Linkt. Made with ❤️ for Sports. Tous droits réservés.</p>
          </div>
        </footer>
      </div>

      {/* PRIVACY POLICY MODAL WITH DARK TRANSPARENT OVERLAY */}
      {isPrivacyOpen && (
        <div className="privacy-modal-overlay" onClick={closePrivacyModal}>
          <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="privacy-modal-close" onClick={closePrivacyModal} aria-label="Fermer">
              &times;
            </button>
            
            <div className="privacy-modal-header">
              <img src={logoImage} alt="Linkt Sports Logo" className="modal-logo" />
              <div>
                <h2 className="modal-title">Politique de Confidentialité</h2>
                <p className="modal-subtitle">Linkt Sports — Dernière mise à jour : 8 juillet 2026</p>
              </div>
            </div>

            <div className="privacy-modal-body">
              <p className="modal-intro">
                L&apos;application <strong>Linkt Sports</strong> est éditée par <strong>Linkt</strong>. La présente politique décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre application mobile.
              </p>

              <hr className="modal-divider" />

              <section className="modal-section">
                <h4>1. Données collectées</h4>
                <p>Nous collectons les types d&apos;informations suivants pour assurer le bon fonctionnement de nos services :</p>
                <ul>
                  <li><strong>Informations de compte :</strong> Nom, adresse e-mail et numéro de téléphone lors de votre inscription.</li>
                  <li><strong>Données de localisation :</strong> Si vous l&apos;autorisez, nous collectons vos coordonnées GPS pour vous suggérer des terrains de sport à proximité.</li>
                  <li><strong>Données financières :</strong> Historique de vos réservations, transactions de recharge de portefeuille et de bonus. Nous ne stockons pas vos coordonnées de carte bancaire directement.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>2. Utilisation des données</h4>
                <p>Vos données sont utilisées uniquement pour :</p>
                <ul>
                  <li>Gérer et valider vos réservations de terrains de sport.</li>
                  <li>Faciliter la mise en relation avec d&apos;autres joueurs (matchmaking).</li>
                  <li>Afficher les terrains les plus proches grâce à la géolocalisation.</li>
                  <li>Assurer la sécurité de votre compte via l&apos;authentification OTP.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>3. Partage des données</h4>
                <p>Nous ne vendons ni ne partageons vos données à des tiers publicitaires. Les seules données partagées sont :</p>
                <ul>
                  <li>Avec les propriétaires de complexes sportifs (stades) pour valider vos réservations (nom et code de réservation uniquement).</li>
                  <li>Avec les autorités compétentes si la loi l&apos;exige.</li>
                </ul>
              </section>

              <section className="modal-section">
                <h4>4. Droits des utilisateurs (Suppression des données)</h4>
                <p>Conformément à la réglementation sur la protection des données, vous pouvez à tout moment demander la modification ou la suppression complète de votre compte et de vos données personnelles.</p>
                <div className="modal-callout">
                  Pour exercer ce droit, vous pouvez nous contacter directement à l&apos;adresse e-mail de support : 
                  <a href="mailto:linkt.sports.app@gmail.com" className="modal-email-link">linkt.sports.app@gmail.com</a>
                </div>
              </section>

              <section className="modal-section">
                <h4>5. Securité</h4>
                <p>Toutes les données de l&apos;application sont transmises via des connexions sécurisées cryptées (HTTPS) vers nos serveurs afin de garantir leur protection contre tout accès non autorisé.</p>
              </section>
            </div>

            <div className="privacy-modal-footer">
              <button className="modal-close-btn" onClick={closePrivacyModal}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
