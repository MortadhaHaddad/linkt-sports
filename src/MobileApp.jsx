import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./MobileApp.css";

export default function MobileApp() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = textRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="App">
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>

      <div className="section-bg">
        <div className="top-bar1" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)' }}/>
        <div className="top-bar2" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)' }}>
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
