import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        
        {/* LEFT */}
        <div className="footer-left">
          <h3>Virat Kumar</h3>
          <p>Web Developer • Designer</p>
        </div>

        {/* CENTER : SOCIAL ICONS */}
        <div className="footer-socials">
          <a className="icon" href="https://github.com/Virat58143" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/virat-kumar-ab80232b5/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/virat_gurjar741/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Virat Kumar</p>
          <span>All rights reserved</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
