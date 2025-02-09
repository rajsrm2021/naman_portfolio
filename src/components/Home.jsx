import React, { useRef } from "react";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assets/BG.png";

const Home = () => {
  // const clientCount = useRef(null);
  const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 150, {
  //     duration: 3,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 3,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            <span class="small-text">Hello there!</span> <br /> Naman Shah
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Concept Artist", "Photographer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:namannart@gmail.com">Contact Me</a>
            <a href="https://drive.google.com/" target="blank">
              Resume <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  500
                </motion.span>
              </p>
              <span>Projects Made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>namannart@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="naman" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
