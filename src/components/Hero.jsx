import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";
import ME from "../../public/MEE.svg"
const Hero = (props) => {
  return (
    <div className="container">
      <div style={{display : 'flex',justifyContent : 'center',alignItems : 'center'}}>
        <img src={ME} alt={`دانیال رحمانی - danial rahmani`} title="دانیال رحمانی - danial rahmani" style={{maxWidth : '600px',height : 'auto',width : '100%'}} />
      </div>


      <Heading firstWord="Who" secondWord="AmI?" />
      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: [
              "A Frontend developer",
              "A Backend developer",
              "A Blockchain lover",
              "A Student",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        {/* <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">IAM</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button> */}
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>
        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img style={{borderRadius : '100%'}} src={`/me/socials/${social.icon}`} alt="@dnipy" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
