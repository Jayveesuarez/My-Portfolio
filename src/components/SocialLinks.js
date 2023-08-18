import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Jayveesuarez">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/jayvee.suarez.395">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/1flaayzzuupp/?hl=en">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;