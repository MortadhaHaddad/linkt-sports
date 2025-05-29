import React, { useEffect, useRef, useState } from "react";
import "./App3.css";

import footballImg from "./assets/images/football.png";
import basketballImg from "./assets/images/tennis.png";
import tennisImg from "./assets/images/padel.png";
import coeurImg from "./assets/images/coeur.png";
import starImg from "./assets/images/star.png";

const sportsData = [
  { name: "Football", image: footballImg, color: "rgba(115, 199, 213, 0.8)" },
  { name: "Basketball", image: basketballImg, color: "rgba(217, 217, 217, 0.8)" },
  { name: "Tennis", image: tennisImg, color: "rgba(223, 22, 65, 0.8)" },
];

export default function HomePage() {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Si container est dans la fenêtre (seuil 100px du bas)
      if (containerTop < windowHeight - 100) {
        // Affiche les items un par un avec un délai
        sportsData.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }, index * 300);
        });

        // On enlève l'event listener, animation lancée
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Au cas où la section est déjà visible au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="top-bar1"></div>
      <div className="top-bar2">
        <h2 className="sports-title">Sports</h2>
      </div>
      <div>
        <div className="sports-container" ref={containerRef}>
          <section className="sports-section">
            <div className="sports-icons">
              {sportsData.map((sport, index) => (
                <div
                  className={`sport-item ${visibleItems.includes(index) ? "visible" : ""}`}
                  key={index}
                >
                  <div className="sport-circle" style={{ backgroundColor: sport.color }}>
                    <img src={sport.image} alt={sport.name} className="sport-img" />
                    <p className="sport-name">{sport.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="subtitle additional-text">
              Our primary focus at the moment is mainly on covering three main sports: football,
              tennis, and padel. Our objective for the next two years is to expand into other
              categories of sports and team games. Stay in touch to see what’s next for Linkt-Sports!
            </p>

            <div className="social-icons">
              <div className="icon" style={{ backgroundImage: `url(${coeurImg})` }}></div>
              <div className="icon" style={{ backgroundImage: `url(${starImg})` }}></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
