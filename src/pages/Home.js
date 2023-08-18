import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  
  return (
    <>
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Row className='py-5 my-2' >
              <Col className='w-100 d-flex justify-content-center'>
                <Image src='/pfp.jpg' className='' width={350} rounded/>
              </Col>
              <Col className='d-flex align-items-center'>
                  <Container>
                    <h1 className='display-1 fw-bold'>
                      Jayvee Suarez
                    </h1>
                    <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
                    <hr />
                    <p>
                    A 20 year old BSIT student at Pangasinan's PHINMA University.
                    </p>  
                    <div className='d-flex align-items-center gap-3'>
                      <Link to='/work'>
                        <Button className='btn-lg' variant='outline-dark'>View Work</Button>
                      </Link>
                      <SocialLinks />
                    </div>
                  </Container>
                  
              </Col>
            </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Container>
            <Row className='pt-5 mt-5'>
              <Col className='w-100 d-flex flex-column justify-content-center'>
                <h1 className='display-1 fw-bold'>About Me</h1>
                <hr />
                <p>Hello, my name is Jayvee Suarez, and I'm a basketball and mobile gaming enthusiast. 
                  I enjoy the excitement of competition and the satisfaction of overcoming obstacles.
                  My inquisitive nature drives me to study and progress every day, on and off the court.
                  Let us face life's challenges with optimism and determination!

                </p>
                <div className='d-flex align-items-center'>
                  <h3 className='fw-bold m-2'>Tech Stack:</h3>
                  <div className='display-6'>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                  </div>
                </div>
                </Col>
                <Col className='w-100 d-flex justify-content-center'>
                  <Image src='/frofile.jpg' height={400} rounded/>  
                </Col>
              </Row>
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Container className='p-5 mt-5 bg-dark text-light rounded'>
              <h3 className='display-1 fw-bold'>Latest Projects</h3>
              <Projects />
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:1}}>
          <div className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my social media accounts where you can ask me questions. 
               Please do not hesitate to contact me!.
            </p>
            <SocialLinks />
          </div>
      </motion.div>
      </AnimatePresence>
    </section>
    </>
  );
  
};

export default Home;
