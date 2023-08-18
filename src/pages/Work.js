import React from 'react';
import { Container } from 'react-bootstrap';
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <h2 className='display-1 fw-bold'>
            My Work
          </h2>
          <p>Here are some of the projects on which I've worked.:</p>
          <hr />
          <Projects />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
