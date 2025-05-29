import React, { useEffect } from "react";
import "./App6.css";

import Image1 from './assets/images/plan3.png';
import Image2 from './assets/images/plan8.png';
import Image3 from './assets/images/plan9.png';
import Image4 from './assets/images/plan11.png';
import Image5 from './assets/images/plan17.png';

const valuesList = [
  { image: Image1, text: "Motivate people to be healthy" },
  { image: Image2, text: "Create new employment opportunities for young people" },
  { image: Image3, text: "Modernize the sports infrastructure" },
  { image: Image4, text: "Smart cities" },
  { image: Image5, text: "Partnership for the good" }
];

export default function HomePage() {
  useEffect(() => {
    const valueItems = document.querySelectorAll(".value-item");

    function handleScroll() {
      valueItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        // déclenchement quand l'élément est à 100px du bas de la fenêtre
        if (rect.top < window.innerHeight - 100) {
          if (!item.classList.contains("animate")) {
            setTimeout(() => {
              item.classList.add("animate");
            }, index * 300); // délai 300ms entre chaque
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    // Appeler au chargement au cas où certains sont déjà visibles
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="navbar navbar-transparent" />

      <div className="top-bar1" />
      <div className="top-bar2">
        <h2 className="sports-title">Our Values</h2>
      </div>

      <div className="values-container">
        <div className="values-grid">
          {valuesList.map((value, index) => (
            <div key={index} className="value-item">
              <img
                src={value.image}
                alt={value.text}
                className="value-image"
              />
              <p className="value-text">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
