import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      
      <div className="about-wrapper">
      
        {/* LEFT SIDE */}
        <div className="about-left glass">
          <h2>About Me</h2>
          <p>
            I’m <span>Virat Kumar</span>,a Full Stack Web Developer with a strong focus on frontend development. I work with React, JavaScript, HTML, CSS, and Node.js to build modern, responsive, and user-friendly web applications. I enjoy creating clean UI, smooth interactions, and performance-driven code while continuously improving my skills through real-world projects.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h4>Education</h4>
              <p>MCA</p>
              <span>Chandigarh University</span>
              <p>BSc Computer Science</p>
              <span>Maa Shakumbhari University</span>
            </div>

            <div className="about-card">
              <h4>Languages</h4>
              <p>Hindi, English</p>
            </div>

            <div className="about-card">
              <h4>Hobbies</h4>
              <p>
                Coding, UI Design, Learning new tech,
                Reading tech blogs
              </p>
            </div>

            <div className="about-card">
              <h4>Personal</h4>
              <p>DOB: 04/Jun/2005</p>
              <span>Nationality: Indian</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right glass">
          <h2>Quick Info</h2>

          <div className="info-row">
            <span>Email</span>
            <span>viratchoudhary741@gmail.com</span>
          </div>
          <div className="info-row">
            <span>Mobile</span>
            <span>+91 8859151562</span>
          </div>
          <div className="info-row">
            <span>Location</span>
            <span>India (Remote)</span>
          </div>

          <div className="info-row">
            <span>Status</span>
            <span>Open to Work</span>
          </div>

          <hr />

          <h3>Catch Me Here</h3>

          <div className="social-row">
            <span>GitHub</span>
            <span>https://github.com/Virat58143</span>
          </div>

          <div className="social-row">
            <span>LinkedIn </span>
            <span>www.linkedin.com/in/virat-kumar-ab80232b5</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
