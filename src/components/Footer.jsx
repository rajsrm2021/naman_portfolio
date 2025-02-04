import React from "react";
// import me from '../assets/github.jpeg'
import {
  AiFillGithub,
  // AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

import pic from "../assets/BG123.png";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div>
          <img src={pic} alt="founder" />

          <h2>Naman shah</h2>
          <p>
            Hi, I am a graphic designer and a 1st year student at srm
            university.
          </p>
        </div>
        <aside>
          <h2>social media</h2>

          <article>
            <a href="https://github.com/rajsrm2021" target="blank">
              <AiFillGithub />{" "}
            </a>
          </article>
          <article>
            <a href="https://www.linkedin.com/in/kumarjaiswal/" target="blank">
              <AiFillLinkedin />{" "}
            </a>
          </article>
          {/* <article>
            <a href="https://instagram.com/rajjaiswal_rk?igshid=MzNlNGNkZWQ4Mg==" target="blank">
              <AiFillInstagram />{" "}
            </a>
          </article> */}
        </aside>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
