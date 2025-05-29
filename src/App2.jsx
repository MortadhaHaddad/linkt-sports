import React, { useEffect, useRef } from "react";
import "./App2.css";

export default function HomePage() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const titles = [
    "Connects People Together",
    "Find the Best Place to Play",
    "Manage Reservations",
  ];

  const descriptions = [
    "Our first mission is to help sports enthusiasts easily find partners to play with.",
    "We aim to address the challenge of finding a space and checking its availability.",
    "We aim to help property owners guarantee their reservations and manage them easily.",
  ];

  return (
    <div className="App">
      <section className="mission-section">
        <h2 className="mission-title">Embarking on Our First Mission</h2>
        <div className="mission-grid">
          {titles.map((title, i) => (
            <div
              key={i}
              className="mission-item hidden"
              ref={(el) => (itemsRef.current[i] = el)}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="mission-header">
                <h3 className="mission-number">0{i + 1}</h3>
                <h4 className="mission-heading">{title}</h4>
              </div>
              <p className="mission-description">{descriptions[i]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
