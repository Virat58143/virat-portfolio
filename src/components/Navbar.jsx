import { useEffect, useState } from "react";
import "./Navbar.css";
import MyResumeCert from "../assets/Virat_Resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const Resume = [
    {
      file: MyResumeCert,
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="avatar">VK</div>
        <div>
          <h3>Virat Kumar</h3>
          <p>Web Developer • Designer</p>
        </div>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li>{Resume.map((cert) => (
          <div className="contact-btn" >

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Resume
            </a>
          </div>
        ))}</li>
        <li><div className="contact-btn" ><a href="#contact" >Contact</a></div></li>
        

        {/* ✅ FIXED THEME BUTTON */}
        <li>
          <button
            className="theme-btn"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
