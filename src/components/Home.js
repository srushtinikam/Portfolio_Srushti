import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <img src="Id-Photo.jpeg" alt="Srushti Nikam" className="profile-photo" />
      <h1>Hello, I'm <span>Srushti Nikam</span></h1>
      <p>Aspiring Full Stack Web Developer 🚀</p>
    </section>
  );
}