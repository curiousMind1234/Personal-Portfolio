import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software engineer with a proven track record of success in
        developing and delivering high-quality software applications. Being
        familiar with variety programming languages and technologies, including
        C++, JavaScript, MongoDB, ReactJs, Express and Node js. Sound
        problem-solving and analytical skills. Good communication and teamwork
        skills.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
