import { React,useEffect } from "react";
import "./Skills.scss";
import cvpath from '../../assets/cv.pdf'
import Loader from "../Loader/Loader";
import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import $ from 'jquery';
export default function Skills() {
  useEffect(() => {
    // This code will be executed after the component has mounted and the window has finished loading
    $('.wrapper-loader').fadeOut('slow');
  }, []);
  return <>
    <div className="skill-page">
      <div className="text-zone">
        <div className="cv">
        <h1>
          <span className="first-h1">Skills </span>
          <span className="first-h1"> &</span>
          <br />
          <span className="second-h1"> Experience</span>
        </h1>

        <div className="cv-button">
            <a href={cvpath} download>
              <button class="button bounce">download resume</button>
              </a>
            </div>
        </div>
        <p>
          As an experienced frontend developer, I have expertise in various web
          development technologies, frameworks, and libraries. I completed an
          internship with FlexNet, gaining hands-on experience in frontend
          development. Currently, I work at Devwood and freelancing platforms, where I have been
          developing frontend applications for several years.
        </p>
        <p align="LEFT">
        My experience
          includes proficiency in HTML5, CSS3, and JavaScript, along with
          popular frameworks and libraries such as React, Next.js, Tailwind,
          Bootstrap, and Material UI. I am skilled in code modification,
          debugging, and troubleshooting, and have experience with Git, npm,
          yarn, and Webpack.
        </p>
        <p>
        I work collaboratively with cross-functional teams
          using agile methodologies such as Scrum to deliver high-quality
          software. I am comfortable managing multiple projects simultaneously
          and thrive in a fast-paced environment. 
        </p>
        <p>
          Overall, I am passionate about
          creating clean, responsive, and user-friendly web applications, and
          continuously strive to learn new technologies and improve my skills
        </p>
      </div>

      <section>
        <div class="dot">
          <IoLogoHtml5 size={40} color="#f06529" />
        </div>
        <div class="dot">
          <TbBrandCss3 size={40} color="#2965f1" />
        </div>
        <div class="dot">
          <FaReact size={40} color="#61dbfb" />
        </div>
        <div class="dot">
          <TbBrandNextjs size={40} color="#45ce05" />
        </div>
        <div class="dot">
          <SiTailwindcss size={40} color="#4dc0b5" />
        </div>
        <div class="dot">
          <FaGit size={40} color="#F1502F" />
        </div>
      </section>
    </div>
    <div className="wrapper-loader"> <Loader /></div>
  </>
}
