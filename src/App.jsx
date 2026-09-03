import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2>Surya Teja</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="small-title">HELLO, I'M</p>

        <h1>Surya Teja</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern web applications, mobile applications
          and practical software solutions.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2>Building useful digital experiences.</h2>

        <p>
          I'm a developer interested in full-stack development,
          application development and building practical products
          that solve real-world problems.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">SKILLS</p>

        <h2>Technologies I work with</h2>

        <div className="skills">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>REST APIs</span>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">PROJECTS</p>

        <h2>Featured Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Smart Parking App</h3>

            <p>
              A practical application designed to help users
              find and manage parking spaces efficiently.
            </p>

            <a
              href="https://github.com/suryateja-eng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Full Stack Application</h3>

            <p>
              A full-stack application with frontend,
              backend APIs and database integration.
            </p>

            <a
              href="https://github.com/suryateja-eng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Developer Portfolio</h3>

            <p>
              A professional portfolio website showcasing
              skills, projects and development work.
            </p>

            <a
              href="https://github.com/suryateja-eng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something together.</h2>

        <p>I'm open to opportunities and collaborations.</p>

        <div className="contact-links">

          <a href="mailto:your-email@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/suryateja-eng"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suryatejasalagrama/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>
      </section>

      <footer>
        © 2026 Surya Teja. All rights reserved.
      </footer>

    </div>
  );
}

export default App;