import React from "react";
import './ProjectCard.scss'
const ProjectCard = ({title}) => {
  return (
    <div className="project-card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect &amp; Engineer</p>
            <p>We love that guy</p>
            <div className="buttons">
              <button className="button1">Source Code</button>
              <button className="button2">See Live</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
