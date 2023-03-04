import { Fragment, useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "../Loader/Loader";
import Animation from "../AnimationLetter/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";
import cvpath from '../../assets/cv.pdf';
import $ from 'jquery';

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    // This code will be executed after the component has mounted and the window has finished loading
    $('.wrapper-loader').fadeOut('slow');
  }, []);

  return (
    <Fragment>
      <div className="about-page">
        <div className="text-zone">
          <div className="h1-resume">
            <h1>
              <Animation
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <div className="cv-button">
            <a href={cvpath} download>
              <button class="button bounce">download resume</button>
              </a>
            </div>
          </div>
          <p>
            "Hello, I'm <strong className="name">M.Zubair Iqbal</strong>, a
            highly skilled frontend developer with a background in Mathematics.
            With 1+ years of experience in the industry, I specialize in
            creating beautiful and intuitive user interfaces that are both
            functional and aesthetically pleasing.
          </p>
          <p align="LEFT">
            My love for coding began when I discovered how powerful it could be
            in solving real-world problems, which led me to pursue a degree in
            Mathematics. This background has given me a unique perspective on
            problem-solving, which I apply to every project I work on. My
            approach to development is informed by my experience with data
            analysis, logical thinking, and attention to detail.
          </p>
          <p>
            I am well-versed in <strong className="html5">HTML5</strong>,{" "}
            <strong className="css3">CSS3</strong>, and{" "}
            <strong className="javascript">JavaScript</strong>, as well as
            various frontend frameworks and libraries like{" "}
            <strong className="reactjs">React.js</strong> and{" "}
            <strong className="nextjs">Next.js</strong>. I am committed to
            staying on top of the latest web technologies, ensuring that my work
            is always cutting-edge and user-friendly.
          </p>
          <p>
            When I'm not coding, you can find me exploring the great outdoors,
            reading a good book, or volunteering in my community. I believe that
            a healthy work-life balance is key to being a successful developer,
            and I strive to maintain that balance in everything I do.
          </p>
          <p>
            I am excited to bring my skills and experience to your next project.
            Let's work together to create something amazing that not only looks
            great but also functions flawlessly."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-loader"> <Loader /></div>
    </Fragment>
  );
};

export default About;
