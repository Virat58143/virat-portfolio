import "./Skill.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
            {/* SKILLS GRAPH */}
      <div className="skills-bars">
  <h3 className="skills-bars-title">Technical Skill Level</h3>

  {/* Frontend */}
  <div className="skill-bar">
    <span>HTML (Semantic)</span>
    <div className="bar">
      <div className="fill" style={{ width: "95%" }}></div>
    </div>
    <small>95%</small>
  </div>

  <div className="skill-bar">
    <span>CSS (Modern & Responsive)</span>
    <div className="bar">
      <div className="fill" style={{ width: "90%" }}></div>
    </div>
    <small>90%</small>
  </div>

  <div className="skill-bar">
    <span>JavaScript</span>
    <div className="bar">
      <div className="fill" style={{ width: "85%" }}></div>
    </div>
    <small>85%</small>
  </div>

  <div className="skill-bar">
    <span>React.js</span>
    <div className="bar">
      <div className="fill" style={{ width: "80%" }}></div>
    </div>
    <small>80%</small>
  </div>

  {/* Backend */}
  <div className="skill-bar">
    <span>Java (Core)</span>
    <div className="bar">
      <div className="fill" style={{ width: "75%" }}></div>
    </div>
    <small>75%</small>
  </div>

  <div className="skill-bar">
    <span>Java Full Stack</span>
    <div className="bar">
      <div className="fill" style={{ width: "70%" }}></div>
    </div>
    <small>70%</small>
  </div>

  <div className="skill-bar">
    <span>MERN Stack</span>
    <div className="bar">
      <div className="fill" style={{ width: "70%" }}></div>
    </div>
    <small>70%</small>
  </div>

  {/* UI / UX */}
  <div className="skill-bar">
    <span>UI / UX Implementation</span>
    <div className="bar">
      <div className="fill" style={{ width: "80%" }}></div>
    </div>
    <small>80%</small>
  </div>

  <div className="skill-bar">
    <span>Animations & Interactions</span>
    <div className="bar">
      <div className="fill" style={{ width: "75%" }}></div>
    </div>
    <small>75%</small>
  </div>

  {/* Tools */}
  <div className="skill-bar">
    <span>Git & GitHub</span>
    <div className="bar">
      <div className="fill" style={{ width: "75%" }}></div>
    </div>
    <small>75%</small>
  </div>

  <div className="skill-bar">
    <span>VS Code</span>
    <div className="bar">
      <div className="fill" style={{ width: "85%" }}></div>
    </div>
    <small>85%</small>
  </div>

  <div className="skill-bar">
    <span>Eclipse IDE</span>
    <div className="bar">
      <div className="fill" style={{ width: "70%" }}></div>
    </div>
    <small>70%</small>
  </div>

  <div className="skill-bar">
    <span>npm & Project Structure</span>
    <div className="bar">
      <div className="fill" style={{ width: "75%" }}></div>
    </div>
    <small>75%</small>
  </div>

  <div className="skill-bar">
    <span>Responsive Testing</span>
    <div className="bar">
      <div className="fill" style={{ width: "80%" }}></div>
    </div>
    <small>80%</small>
  </div>
</div>

    

    </section>
  );
};

export default Skills;
