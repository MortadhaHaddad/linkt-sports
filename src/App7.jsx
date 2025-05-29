import "./App7.css";
import backgroundImage from './assets/images/soccer.jpg';
import pointeur from './assets/images/pointeur.png'; // Importez vos images locales
import telephone from './assets/images/telephone.png';
import email from './assets/images/email.png';

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="top-bar1" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)' }}></div>
      <div className="top-bar2" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)' }}>
        <h2 className="sports-title">Coordinates</h2>
      </div>

      <div className="contact-container">
        {/* Section des coordonnées avec images */}
        <div className="contact-info">
          <div className="info-box">
            <img src={pointeur} alt="Map Icon" className="info-icon" />
            <p>
              14 City Ennour Medenine Nord,
              <br />
              Medenine, Tunisie 4100
            </p>
          </div>
          <div className="info-box">
            <img src={telephone} alt="Phone Icon" className="info-icon" />
            <p>+216 26 980 205</p>
          </div>
          <div className="info-box">
            <img src={email} alt="Email Icon" className="info-icon" />
            <p>mh.linkt@gmail.com</p>
          </div>
        </div>

        <div className="info-box" style={{ justifyContent: 'center' }}>
          <p>Made with ❤️ for Sports</p>
        </div>
      </div>
    </div>
  );
}
