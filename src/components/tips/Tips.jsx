import {React,useEffect} from "react";
import "./Tips.scss";
import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import Loader from "../Loader/Loader";
import $ from 'jquery';
const Tips = () => {
  useEffect(() => {
    // This code will be executed after the component has mounted and the window has finished loading
    $('.wrapper-loader').fadeOut('slow');
  }, []);
  return <>
    <div className="tips-page">
      <div className="text-zone">
        <h1>Frontend Tips</h1>
        <div>
          <p>
            Stay up-to-date with the latest frontend technologies, including
            HTML5, CSS3, JavaScript, React, Next.js, Tailwind, Bootstrap, and
            Material UI.
          </p>
          <p>
            Keep your code organized and modular, using consistent naming
            conventions and modular code structures.
          </p>
          <p>
            Test your website on multiple devices and browsers, including
            Chrome, Firefox, Safari, smartphones, tablets, and desktop
            computers.
          </p>
          <p>
            Use responsive design and CSS frameworks such as Bootstrap and
            Materialize to create websites that work well on different devices.
          </p>
          <p>
            Optimize your website's performance using performance optimization
            tools and techniques, and learn JavaScript to create dynamic and
            interactive web applications.
          </p>
        </div>
      </div>
      <div className="tips">
        <div class="zoom">
          <IoLogoHtml5 size={40} color="#f06529" />
        </div>
        <div class="zoom">
          <TbBrandCss3 size={40} color="#2965f1" />
        </div>
        <div class="zoom">
          <FaReact size={40} color="#61dbfb" />
        </div>
        <div class="zoom">
          <TbBrandNextjs size={40} color="#45ce05" />
        </div>
        <div class="zoom">
          <SiTailwindcss size={40} color="#4dc0b5" />
        </div>
        <div class="zoom">
          <FaGit size={40} color="#F1502F" />
        </div>
      </div>
    </div>
    <div className="wrapper-loader"> <Loader /></div>
 </>
};

export default Tips;
