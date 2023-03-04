import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logos from "../../assets/images/letter-z.png";
import logoSubtitle from "../../assets/images/name-small.png";
import { AiOutlineHome } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { BsEnvelope } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import "./sidebar.scss";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import { SiPolymerproject } from "react-icons/si";
import {BsPerson} from 'react-icons/bs'

const menu=()=>{
  return (
        <>
        <NavLink className="home-link" exact to={"/"} style={{textDecoration:'none'}}>
        <AiOutlineHome    size={24} />
        </NavLink>
        <NavLink className='about-link' exact to={"/about"} >
          <BsPerson  size={24}/>
        </NavLink>
        <NavLink className='contact-link' exact to={"/contact"} >
          <BsEnvelope  size={24}  />
        </NavLink>
        <NavLink className='skill-link' exact to={"/skills"}>
          <SiSkillshare  size={24}/>
        </NavLink>
        <NavLink className='project-link' exact to={"/projects"} >
          <SiPolymerproject size={24} />
        </NavLink>
        <NavLink  className='tips-link'exact to={"/tips"}>
          <MdOutlineTipsAndUpdates size={24} />
        </NavLink>
        </>
  )
}

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>
        <div className="navbar">
      <div className="navbar__logos">
        <Link to={'/'}><img src={logos} alt="logo" className="navbar__logo1" />
        <img src={logoSubtitle} alt="logo2" className="navbar__logo2" /></Link>
      </div>
      <nav className="navbar__nav-element">
        {menu()}
      </nav>
      <div className="navbar-menu">
       <div className="icon">
       {toggleMenu ? (
          < GiCrossMark
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
       </div>
       <div className="navbar-menu_container">
       {toggleMenu && ( 
            <div className="gpt3__navbar-menu_container-links">
            {menu()} 
          </div>
        )}
        </div>
      </div>
      <div className="navbar__linked-git-sype-links" >
          <a
            href="https://www.linkedin.com/in/muhammd-zubair-iqbal-526ab8174/"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin  className="anchor-icon" size={18} />
          </a>
          <a
            href="https://github.com/Zubair-ai"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={18} className="anchor-icon" />
          </a>
          <a href="https://www.skype.com/en/" rel="noreferrer" target="_blank">
            <AiOutlineSkype  size={18} className="anchor-icon" />
          </a>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
