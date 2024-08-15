import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="Footer container">
      <h1>SHOPPIE</h1>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <FontAwesomeIcon icon={faInstagramSquare} />
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faPinterestSquare} />
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>Copyrights @2024</p>
      </div>
    </div>
  );
};

export default Footer;
