import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader'
import Animation from "../AnimationLetter/Animation";
import fullname from "../../assets/images/fullname.png";
import "./Home.scss";
import $ from 'jquery';

const ToArray = (string) => {
  const usingArrayFrom = Array.from(string);
  return usingArrayFrom;
};
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const jobArray = ToArray("Experienced web developer");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    // This code will be executed after the component has mounted and the window has finished loading
    $('.wrapper-loader').fadeOut('slow');
  }, []);

  return (
    <Fragment>
      <div className="home-page">
      <div className="flip-horizontal-bottom">
          <div class="container">
            <div class="avatar">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                  alt="Skytsunami"
                />
            </div>
          </div>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i ,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <img
              src={fullname}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <br />
            <Animation letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>
          <h2>Front End Developer & JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
     <div className="wrapper-loader"> <Loader /></div>
    </Fragment>
  );
};

export default Home;
