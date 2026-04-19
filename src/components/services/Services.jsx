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
            <motion.b whileHover={{color:"orange"}}>I am a Data Scientist at Tibil Solutions with a Master’s in Computer Science from the University of Dayton and a passion for turning complex data into actionable insights. Following specialized Data Science coursework and a certification in Autonomous Systems and Data Science from University of Dayton, I now focus on the intersection of AI, human behavior, and platform safety. I am currently working on fraud detection Proof of Concepts (POCs), leveraging behavioral biometrics to identify patterns like digital hesitation within financial ecosystems. With expertise in SQL, Tableau, and Machine Learning, I am dedicated to using data storytelling to uncover the "why" behind information and help organizations build smarter, more secure technological environments.
            </motion.b>
          </h2>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Bachelor's Degree</h2><h4>GPA: 9.05/10</h4> <h4>SIES GST (Mumbai University)</h4><h4>July 2023</h4> 
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
            I completed my Master’s in Computer Science at the University of Dayton, specializing through advanced coursework and a certification in Autonomous Systems and Data Science. My academic work focused on high-level data modeling and computer vision, sharpening my ability to extract meaningful patterns from complex datasets. By combining this rigorous training with behavioral analytics, I deliver impactful, security-focused insights for modern technological environments.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
