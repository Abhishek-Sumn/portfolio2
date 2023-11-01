import blog from "./assets/blog.png";
import task from "./assets/task.svg";
import eye from "./assets/eye.png";
import a from "./assets/a.svg";
import music from "./assets/music.png";
import script from "./assets/script.png";
import update from "./assets/update.png";

export default function Content() {
  return (
    <>
      <div className="content">
        <div id="about" className="about">
          <p>
            Aspiring tech engineer with a flair for fusing engineering and
            design. My sweet spot is the intersection of coding and user
            experience.
          </p>
          <p>
            I geek out on languages like <b>C++</b>, <b>HTML</b>, <b>CSS</b>,
            and <b>JavaScript</b>. But I also obsess over aesthetics and
            intuition in <b>UI</b> and <b>UX</b>. I love sculpting products that
            are both visually striking and seamlessly usable.{" "}
          </p>
          <p>
            I'm always seeking out new adventures, perspectives, and design
            inspirations. Whether it's through travel, food, art or just meeting
            new people, I immerse myself in diverse experiences that fuel my
            hybrid technical-creative approach.
          </p>
        </div>

        <div id="experience" className="journey">
          <div className="learning-path">
            <p className="title">Experience</p>
            <div className="lesson">
              <div className="lesson-intro">
                <h6>May - June 2023</h6>
              </div>
              <div className="lesson-details">
                <h4>Inxee Systems Private Limited</h4>
                <h6>Lead Web Application developer</h6>
                <p>
                  As a web app developer intern, i developed inventory management system for the company which is utilised for managing inventory operations such as 
                  adding new product, updating, deleting and so on.
                </p>
                <div className="skills-container">
                  <a className="skill-button">Mongo DB</a>
                  <a className="skill-button">Express Js</a>
                  <a className="skill-button">Node Js</a>
                  <a className="skill-button">HTML</a>
                  <a className="skill-button">CSS</a>
                  <a className="skill-button">JS</a>
                  <a className="skill-button">REACT. JS</a>
                </div>
              </div>
            </div>

          </div>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1jQmzs-GRSMmyikgsswN6JXydCwowNdbm/view?usp=sharing"
            className="resume"
          >
            View Full Résumé ›
          </a>
        </div>

        <div id="projects" className="projects">
          <div id="experience" className="journey">
            <div className="learning-path">
              <p className="title2">Projects</p>
              <div className="lesson">
                <div className="icon-intro">
                  <img className="blog" src={blog} />
                </div>
                <div className="project-details">
                  <h4>MovieFinder</h4>
                  <h6>Made on React JS</h6>
                  <p>
                    Utilizing OMDB Api to fetch Movie details.You can search and get infos about any movie or web series.
                  </p>
                  <div className="link">
                    <a href="https://moviefinder-two.vercel.app/">Live↗</a>
                    <a href="https://github.com/Abhishek-Sumn/moviefinder">
                      Github↗
                    </a>
                  </div>
                  <div className="skills-container">
                  <a className="skill-button">React JS</a>
                  <a className="skill-button">API</a>
                    <a className="skill-button">Github</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    
                  </div>
                </div>
              </div>

              <div className="lesson">
                <div className="icon-intro">
                  <img src={task} />
                </div>
                <div className="project-details">
                  <h4>Budget Calculator</h4>
                  <h6>Smooth UI</h6>
                  <p>
                    This app is made to easily calculate expense with eye soothing UI
                  </p>
                  <div className="link">
                    <a href="https://abhishek-sumn.github.io/budget_calculator/">Live↗</a>
                    <a href="https://github.com/Abhishek-Sumn/budget_calculator">
                      Github↗
                    </a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML</a>
                    <a className="skill-button">CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT. JS</a>
                  </div>
                </div>
              </div>

              
              <a href="https://github.com/Abhishek-Sumn" className="github">
                Visit my github profile ›
              </a>
            </div>
          </div>
        </div>

        <p className="end">
          Influenced by{" "}
          <a href="https://brittanychiang.com">Brittany Chiang's</a> portfolio,
          this project was reimagined with a personal twist. Developed using
          React and core web technologies in the Visual Studio Code environment.{" "}
        </p>
      </div>
    </>
  );
}
