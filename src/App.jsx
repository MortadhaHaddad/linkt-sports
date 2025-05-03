import React from "react";
import { Button } from "./Button";
import "./App_0.css";
import { motion } from "framer-motion";

// Importation des images des sports
import footballImg from './assets/images/football.png';
import basketballImg from './assets/images/tennis.png';
import tennisImg from './assets/images/padel.png';
import coeurImg from './assets/images/coeur.png';
import starImg from './assets/images/star.png';

import PhotoMahdi from './assets/images/PhotoMahdi.png';
import PhotoMortadha from './assets/images/PhotoMortadha.jpg';

const sportsData = [
  { name: 'Football', image: footballImg, color: 'rgba(115, 199, 213, 0.8)' },
  { name: 'Basketball', image: basketballImg, color: 'rgba(217, 217, 217, 0.8)' },
  { name: 'Tennis', image: tennisImg, color: 'rgba(223, 22, 65, 0.8)' },
];

// Importez vos images ici
import Image1 from './assets/images/plan3.png';
import Image2 from './assets/images/plan8.png';
import Image3 from './assets/images/plan9.png';
import Image4 from './assets/images/plan11.png';
import Image5 from './assets/images/plan17.png';

import backgroundImage from './assets/images/soccer.jpg';
import pointeur from './assets/images/pointeur.png'; // Importez vos images locales
import telephone from './assets/images/telephone.png';
import email from './assets/images/email.png';

const valuesList = [
    { image: Image1, text: "Motivate people to be healthy" },
    { image: Image2, text: "Create new employment opportunities for young people" },
    { image: Image3, text: "Modernize the Sports infrastructure" },
    { image: Image4, text: "Smart cities" },
    { image: Image5, text: "Partnership for the good" }
  ];

""
export default function HomePage() {
  return (
    <div className="App">
      {/* Barres de navigation */}
      <div className="navbar" style={{ backgroundColor: "rgba(223, 22, 65, 0.9)" }}></div>
      {/* Section Header */}
      <motion.header 
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="contact-button">
          <Button className="contact-btn">Contact Us</Button>
        </div>
        <div className="header-content">
          <div className="logo"></div>
          <h1 className="site-title">Linkt</h1>
        </div>
        <p className="description">Your Ultimate Platform for Team Sports</p>
        <p className="description additional-text" style={{color: 'white'}}>
          Linkt is a mobile app that helps team sports enthusiasts easily find partners and book spaces to play. 
          It also provides a solution for venue owners to manage and guarantee their reservations.
          So, whether you're a player or a property owner, Linkt is your go-to solution for a seamless sports experience!
        </p>
      </motion.header>
      
      <div className="navbar" style={{ backgroundColor: "#5CE1E6" }}></div>
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>

      {/* Section Mission */}
      <section className="mission-section">
        <h2 className="mission-title">Embarking on Our First Mission</h2>
        <div className="mission-grid">
          <div className="mission-item">
            <div className="mission-header">
              <h3 className="mission-number">01</h3>
              <h4 className="mission-heading">Connects People Together</h4>
            </div>
            <p className="mission-description">
              Our first mission is to help sports enthusiasts easily find partners to play with.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-header">
              <h3 className="mission-number">02</h3>
              <h4 className="mission-heading">Find the Best Place to Play</h4>
            </div>
            <p className="mission-description">
              We aim to address the challenge of finding a space and checking its availability.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-header">
              <h3 className="mission-number">03</h3>
              <h4 className="mission-heading">Manage Reservations</h4>
            </div>
            <p className="mission-description">
              We aim to help property owners guarantee their reservations and manage them easily.
            </p>
          </div>
        </div>
      </section>

      <div className="top-bar1"></div>
      <div className="top-bar2"><h2 className="sports-title">Sports</h2></div>

      <div>
        <div className="sports-container">
          {/* Sports Section */}
          <section className="sports-section">
            <div className="sports-icons">
              {sportsData.map((sport, index) => (
                <div className="sport-item" key={index}>
                  <div className="sport-circle" style={{ backgroundColor: sport.color }}>
                    <img src={sport.image} alt={sport.name} className="sport-img" />
                    <p className="sport-name">{sport.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="subtitle additional-text">
              Our primary focus at the moment is mainly on covering three main sports: football, tennis, and padel. 
              Our objective for the next two years is to expand into other categories of sports and team games. 
              Stay in touch to see what’s next for Linkt-Sports!
            </p>

            <div className="social-icons">
              <div className="icon" style={{ backgroundImage: `url(${coeurImg})` }}></div>
              <div className="icon" style={{ backgroundImage: `url(${starImg})` }}></div>
            </div>
          </section>
        </div>
      </div>
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>
      <div style={{ backgroundColor: 'rgba(143, 210, 221, 0.5)', marginTop:0,}}>
        <div className="top-bar1"  style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)'}}></div>
        <div className="top-bar2"  style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)'}}><h2 className="sports-title">Mobile App</h2></div>
        <div className="container">
          <div className="App-mobile">
          {/* Sports Section */}
            <section className="text-container">
              <p>Our mobile app will be available soon on Google Play! Stay tuned and get excited.</p>
            </section>
          </div>
        </div>
      </div>
      <div>
      <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>
      <div className="top-bar1" style={{backgroundColor:'rgba(253, 157, 36, 0.9)'}}></div>
      <div className="top-bar2" style={{backgroundColor:'rgba(253, 157, 36, 0.9)'}}><h2 className="sports-title">Co-Founders</h2></div>
      <div className="App-sport">
        {/* Sports Section */}
        <section className="sports2">
          <div className="sports-icons2">
            <div className="sport2">
              <div
                className="cercle2"
                style={{
                  backgroundImage: `url(${PhotoMahdi})`, // Image comme arrière-plan
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <p className="sport-title2">Mahdi HADDADD</p>
              <p className="sport-description2">Telecom Engineer & CEO</p>
            </div>

            <div className="sport2">
              <div
                className="cercle2"
                style={{
                  backgroundImage: `url(${PhotoMortadha})`, // Image comme arrière-plan
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <p className="sport-title2">Mortadha HADDAD</p>
              <p className="sport-description2">Advanced Technologies Engineer & CTO</p>
            </div>

          </div>

          <p className="subtitle additional-text spot">
          Our team consists of Mahdi Haddad, a Cloud Core Network Engineer with a passion 
          for entrepreneurship and technology, and Mortadha, an Advanced Technology Engineer 
          focused on AI and software development. Together, we aim to make a meaningful impact 
          by leveraging our skills and dedication to innovate and create effective solutions.
          </p>
        </section>
      </div>
      <div>
    <div className="top-bar1"></div>
    <div className="top-bar2"><h2 className="sports-title">Our Values</h2></div>
    <div className="values-container">
      <div className="values-grid">
        {valuesList.map((value, index) => (
          <div key={index} className="value-item">
            <img src={value.image} alt={`Value ${index + 1}`} className="value-image" />
            <p className="value-text">{value.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
    
    <div className="navbar" style={{ backgroundColor: "rgba(217, 217, 217, 0.5)", height: "20px" }}></div>
    <div className="navbar" style={{ backgroundColor: "#5CE1E6" }}></div>
    <div>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="top-bar1" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)'}}></div>
      <div className="top-bar2" style={{ backgroundColor: 'rgba(25, 72, 106, 0.9)'}}>
        <h2 className="sports-title">Coordinates</h2>
      </div>

      <div className="contact-container">
        {/* Section des coordonnées avec images */}
        <div className="contact-info">
          <div className="info-box">
            <img src={pointeur} alt="Map Icon" className="info-icon" />
            <p>14 City Ennour Medenine Nord,
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
        <div className="info-box" style={{ justifyContent: 'center'}}>
          <p>Made with ❤️ for Sports</p>
        </div>

      </div>
    </div>
    </div>
    </div>
  );
}
