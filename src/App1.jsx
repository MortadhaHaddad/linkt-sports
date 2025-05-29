import { Button } from "./Button";
import "./App1.css";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <div className="App">
      {/* Barres de navigation */}
      <div className="navbar" style={{ backgroundColor: "rgba(223, 22, 65, 0.9)" }}></div>

      {/* Section Header */}
      <header className="header">
        <div className="contact-button">
          <Button className="contact-btn">Contact Us</Button>
        </div>
        <div className="header-content">
          <div className="logo"></div>
          <h1 className="site-title">Linkt</h1>
        </div>

        {/* Texte avec animation de frappe */}
        <p className="description animated-text">
          <Typewriter
            words={['Your Ultimate Platform for Team Sports']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </p>

        <p className="description additional-text" style={{ color: 'white' }}>
          Linkt is a mobile app that helps team sports enthusiasts easily find partners and book spaces to play.
          It also provides a solution for venue owners to manage and guarantee their reservations.
          So, whether you're a player or a property owner, Linkt is your go-to solution for a seamless sports experience!
        </p>
      </header>

      {/* Autres barres */}
      <div className="navbar" style={{ backgroundColor: "#5CE1E6" }}></div>
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>
    </div>
  );
}
