import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
    viewport:{ once: true, amount: 0.1 }
  },
};
const isMobile = window.innerWidth <= 768;

const noAnimation = {
  initial: { x: 0, y: 0, opacity: 1 },
  animate: { x: 0, y: 0, opacity: 1 },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={isMobile ? noAnimation : variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
    >
     
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>About Me</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{color:"orange"}}>I'm a data enthusiast with a computer science background and a passion for turning data into actionable insights. Starting with software development, I built strong problem-solving skills through academic and professional projects. After my Master’s, I shifted focus to data analytics, completing the Google Data Analytics Professional Certificate to enhance my skills in SQL, Tableau, Power BI, and data visualization. I enjoy uncovering patterns, asking meaningful questions, and presenting insights that drive decisions. My recent projects span streaming trends, human behavior, and digital well-being, and I’m eager to keep learning and helping organizations make data-driven choices.
            </motion.b>
          </h2>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Bachelor's Degree</h2><h4>GPA: 9.05/10</h4> <h4>SIES GST (Mumbai)</h4><h4>July 2023</h4> 
          <p>
            I earned my Bachelor’s degree in Computer Engineering from SIES Graduate School of Technology, Mumbai, where I built a strong foundation in programming, algorithms, and software development. Through academic projects and coding competitions, I gained practical experience and strengthened my problem-solving skills. This journey fueled my curiosity for technology and prepared me for advanced studies in computing.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Master's Degree</h2><h4>GPA: 3.84/4</h4> <h4>University of Dayton (USA)</h4><h4>May 2025</h4> 
          <p>
            I completed my Master’s in Computer Science at the University of Dayton, USA, focusing on software development and immersive technologies like AR/VR. I worked on projects involving interactive applications and computer vision, which enhanced my ability to create innovative solutions. Over time, my work shifted toward data analytics, where I now combine my software background with analytical thinking to deliver impactful insights.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
