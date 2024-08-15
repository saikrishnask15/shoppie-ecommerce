import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroimage from './assests/hero_image.png'
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-sub-ctn">
      <div className="hero-left">
        <h4>NEW ARRIVALS ONLY</h4>
        <div className="hero-caption">
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <button>
          Latest Collections <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="hero-right">
        <img src={heroimage} alt=""/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
