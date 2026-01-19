import "./Projects.css";
import appleProject from "../assets/apple-tree-infotech.png";
import travalmate from "../assets/travalmate.png";
import typingProject from "../assets/typing-speed-project.png";
import usability from "../assets/usabilityhub-project.png";

const Projects = () => {

  // 🔗 Common function for all Visit buttons
  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="projects-section" id="projects">
      {/* HEADER */}
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Some Recent Projects</p>
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">

        {/* CARD 1 */}
        <div className="project-card glass">
          <img src={travalmate} alt="Fees Management Portal" />

          <div className="project-content">
            <h3>TravelMate – A Modern Tourism Website</h3>
            <p>TravelMate is a fully responsive and interactive tourism website developed using HTML, CSS, JavaScript, and React.js.</p>

            <ul>
              <li>HTML, CSS, JS, React.js</li>
              <li>Fully Responsive</li>
              <li>Custom Animations</li>
            </ul>

            <button
              className="visit-btn"
              onClick={() => openProject("https://virat58143.github.io/travelmate-demo-website/")}
            >
              Visit
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="project-card glass ">
          <img src={usability} alt="Printing Website" />

          <div className="project-content">
            <h3>UsabilityHub Clone Project</h3>
            <p>Modern website UX/UI Clone design.</p>

            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Smooth Animations</li>
              <li>Fully Responsive</li>
            </ul>

            <button
              className="visit-btn"
              onClick={() =>
                openProject("https://virat58143.github.io/UsabilityHub-Clone/")
              }
            >
              Visit
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="project-card glass">
          <img src={appleProject} alt="Portfolio Website" />

          <div className="project-content">
            <h3>Fees Management Portal (Java Full Stack)</h3>
            <p>Designed and developed to meet the specific business and functional requirements of Appletree Infotech Institute, Ghaziabad.</p>

            <ul>
              <li>HTML, CSS, JS,</li>
              <li>JSP,Maven Projact , Hibernate, Core Java, MySQL</li>
              <li>Tomcat(Server), Eclipes IDE</li>
              <li>Modern UI</li>
              
            </ul>

            <button
              className="visit-btn"
              onClick={() => openProject("https://github.com/Virat58143/Appletree-infotech")}
            >
              Visit
            </button>
          </div>
        </div>

        

        {/* CARD 4 */}
        <div className="project-card glass">
          <img src={typingProject} alt="Todo App" />

          <div className="project-content">
            <h3>Typing Speed Challenge Project</h3>
            <p>Modern task management UI with animations.</p>

            <ul>
              <li>HTML, CSS, JS, React.js</li>
              <li>Awesome Animations</li>
              <li>Fully Responsive</li>
            </ul>

            <button
              className="visit-btn"
              onClick={() => openProject("https://virat58143.github.io/Typing_Speed_Challange/")}
            >
              Visit
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
