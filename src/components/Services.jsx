import React from "react";
import { motion } from "framer-motion";
import { DiPhotoshop } from "react-icons/di";
import { RiBlenderLine } from "react-icons/ri";
import { SiAdobepremierepro } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Work Experience</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <p>
            2D/3D Animation,
            <br /> Blender, Photoshop
            <br />
            Illustrator, Premier Pro <br />
            Procreate
          </p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <RiBlenderLine />
          <span>Blender</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <DiPhotoshop />
          <span>Photoshop</span>
        </motion.div>

        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiAdobepremierepro />
          <span>Premier Pro</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
