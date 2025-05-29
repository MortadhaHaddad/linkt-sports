import React, { useEffect, useRef } from 'react';
import "./App5.css";
import PhotoMahdi from './assets/images/PhotoMahdi.png';
import PhotoMortadha from './assets/images/PhotoMortadha.jpg';

export default function HomePage() {
  const sportRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sportRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sportRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>
      <div className="top-bar1" style={{ backgroundColor: 'rgba(253, 157, 36, 0.9)' }}></div>
      <div className="top-bar2" style={{ backgroundColor: 'rgba(253, 157, 36, 0.9)' }}>
        <h2 className="sports-title">Co-Founders</h2>
      </div>

      <div className="App-sport">
        <section className="sports2">
          <div className="sports-icons2">
            {[PhotoMahdi, PhotoMortadha].map((photo, index) => (
              <div
                key={index}
                className="sport2"
                ref={(el) => (sportRefs.current[index] = el)}
              >
                <div
                  className="cercle2"
                  style={{
                    backgroundImage: `url(${photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <p className="sport-title2">
                  {index === 0 ? 'Mahdi HADDADD' : 'Mortadha HADDAD'}
                </p>
                <p className="sport-description2">
                  {index === 0
                    ? 'Telecom Engineer & CEO'
                    : 'Advanced Technologies Engineer & CTO'}
                </p>
              </div>
            ))}
          </div>

          <p className="subtitle additional-text spot">
            Our team consists of Mahdi Haddad, a Cloud Core Network Engineer with a passion 
            for entrepreneurship and technology, and Mortadha, an Advanced Technology Engineer 
            focused on AI and software development. Together, we aim to make a meaningful impact 
            by leveraging our skills and dedication to innovate and create effective solutions.
          </p>
        </section>
      </div>
    </div>
  );
}
