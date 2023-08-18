import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
          <h2 className='display-1 fw-bold'>My Education</h2>
          <p>These are my academic credentials:</p>
          <section>
          <div class="container py-5">
            <div class="main-timeline">
              <div class="card">
                <div class="card-body p-4">
                  <h3>Tuliao Elementary School | 2015</h3>
                  <p class="mb-0">Urdaneta-Calasiao Rd., Tuliao, Santa Barbara, 2419, Pangasinan, Philippines.</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body p-4">
                  <h3>Tuliao National High School | 2019</h3>
                  <p class="mb-0">Mac Arthur Highway, Brgy. Tuliao, Santa Barbara, Pangasinan, Philippines.</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body p-4">
                  <h3>PHINMA University of Pangasinan | Current</h3>
                  <p class="mb-0">Arellano Street, Dagupan City, 2400, Pangasinan, Philippines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
