import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./App4.css";

export default function HomePage() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="App">
      <div className="navbar" />

      <div className="section-bg">
        <div className="top-bar1"/>
        <div className="top-bar2">
          <h2 className="sports-title">Mobile App</h2>
        </div>

        <div className="container">
          <div className="App-mobile">
            <section
              ref={textRef}
              className={`text-container fade-in ${isVisible ? "visible" : ""}`}
            >
              {isVisible && (
                <Typewriter
                  words={["Our mobile app will be available soon on Google Play! Stay tuned and get excited."]}
                  cursor
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
