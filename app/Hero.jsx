import githubLogo from './assets/github.png';
import linkedinLogo from './assets/ln.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link"
const Hero = () => {
  const [heading, setHeading] = useState('Engineer');

  useEffect(() => {
    const headings = [ 'Tech Enthusiast', 'Web Developer', 'Aspiring Engineer'];
    let i = 0;
    
    const changeHeading = () => {
      setHeading(headings[i]);
      i = i < headings.length - 1 ? i + 1 : 0;
    };

    const intervalId = setInterval(changeHeading, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Abhishek Suman</h1>
          <h4>{heading}</h4>
          <p>
             Crafting user experiences  <br></br>that bridge creativity with functionality.
            </p>
        </div>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
      
        </div>
        <div className="social">
          <a
            href="https://github.com/Abhishek-Sumn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedinLogo}
                width={55}
                height={33}
                alt="Linkedin Link"
             />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-suman-0021411b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img className="l" src={linkedinLogo} alt="Linkedin Link" /> */}
            <Image
              src={githubLogo}
                width={55}
                height={33}
                alt="Github Link"
             />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-suman-0021411b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
         
        </div>

        <div className="resume-link">
          <a target='_blank' href="https://drive.google.com/file/d/1P2On7ZxyR_qgx--qo1txI-S1vTpMVJjn/view?usp=sharing">My Resume</a>
          </div>
      </div>
    </>
  );
}

export default Hero;
