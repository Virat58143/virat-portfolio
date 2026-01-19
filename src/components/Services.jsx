import "./Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      {/* HEADER */}
      <div className="services-header">
        <h2>Services</h2>
        <p>Focused on web development & modern UI design</p>
      </div>

      {/* CARDS */}
      <div className="services-grid">
        <div className="skill-card glass">
          <span className="icon">⚡</span>
          <h3>Web Development</h3>
          <p>
            I build modern, scalable web applications using semantic HTML, modern CSS, JavaScript, React.js, and Java for backend development, with a strong focus on clean architecture, smooth animations, responsive design, REST API integration, and performance-first builds.
          </p>
        </div>

        <div className="skill-card glass">
          <span className="icon">🎨</span>
          <h3>Web Design</h3>
          <p>
            I craft responsive layouts and scalable UI systems with a strong understanding of color theory, typography, and interactive prototypes to deliver clean, consistent, and user-focused digital experiences.
          </p>
        </div>
        <div className="skill-card glass">
          <span className="icon">☕</span>
          <h3>Java Full Stack Development</h3>
          <p>
            Full-stack web applications using Java for backend and modern frontend technologies, including database integration, REST APIs, and responsive user interfaces with a focus on clean code and scalable architecture.
          </p>
        </div>
        <div className="skill-card glass">
          <span className="icon">🌐</span>
          <h3>Custom Website Development</h3>
          <p>
           Custom-designed websites tailored to business needs, built with semantic HTML, modern CSS, and JavaScript to ensure responsiveness, usability, and a professional online presence.
          </p>
        </div>

        <div className="skill-card glass">
          <span className="icon">⚛️</span>
          <h3>React Development</h3>
          <p>
            I develop modern single-page applications with React using component-based architecture, hooks, reusable UI patterns, and efficient state management for scalable and high-performance frontend solutions.
          </p>
        </div>

        <div className="skill-card glass">
          <span className="icon">🧩</span>
          <h3>MERN Stack With AI</h3>
          <p>
            Full-stack web applications using MongoDB, Express.js, React.js, and Node.js, including frontend development, REST API integration, and basic backend logic with a focus on clean code and scalable architecture.
          </p>
        </div>

        <div className="skill-card glass">
          <span className="icon">🔍</span>
          <h3>Accessibility & SEO</h3>
          <p>
            Keyboard-friendly UI, semantic markup,
            reduced-motion support and SEO basics.
          </p>
        </div>

        

        <div className="skill-card glass">
          <span className="icon">🚀</span>
          <h3>Performance</h3>
          <p>
            Optimized assets, clean code, smooth animations
            and fast load experience.
          </p>
        </div>

        <div className="skill-card glass">
          <span className="icon">🛠️</span>
          <h3>Tools & Workflow</h3>
          <p>
            I use Git & GitHub, VS Code, Eclipse IDE, and npm to build well-structured projects with responsive testing and clean, maintainable code.
          </p>
        </div>
      </div>
      </section>
  )
};

export default Services;