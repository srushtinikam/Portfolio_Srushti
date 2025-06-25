import React from "react";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "white" }}>
      <a href="#home" style={{ margin: "1rem" }}>Home</a>
      <a href="#about" style={{ margin: "1rem" }}>About</a>
      <a href="#projects" style={{ margin: "1rem" }}>Projects</a>
      <a href="#resume" style={{ margin: "1rem" }}>Resume</a>
      <a href="#contact" style={{ margin: "1rem" }}>Contact</a>
    </nav>
  );
}
