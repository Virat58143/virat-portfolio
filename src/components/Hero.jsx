import { useEffect, useState } from "react";
import "./Hero.css";
import viratImg from "../assets/virat.jpg";

const roles = ["Web Developer","Full Stack Developer","Java Developer","MERN Stack Developer", "Frontend Developer", "React Developer", "Web Desiginer"];

const Hero = () => {
  const [i, setI] = useState(0);
  const [t, setT] = useState("");

  useEffect(() => {
    const text = roles[i];
    let idx = 0;

    const interval = setInterval(() => {
      setT(text.slice(0, idx + 1));
      idx++;
      if (idx === text.length) {
        clearInterval(interval);
        setTimeout(() => setI((i + 1) % roles.length), 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [i]);

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="tag">BUILD FAST • LOOK STUNNING</span>
        <h1>
          Hi, I’m <span>Virat Kumar</span><br />
          <span className="typing">{t}</span>
        </h1>
        <p>Full Stack Web Developer skilled in HTML,CSS, JavaScript,React, Node.js, Core Java, and modern web technologies, focused on building responsive, user-friendly, and real-world applications.
</p>
        <a href="#contact" className="hero-btn">Contact Me</a>
      </div>

      <div className="hero-right">
        <div className="image-box">
          <img src={viratImg} alt="Virat" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
