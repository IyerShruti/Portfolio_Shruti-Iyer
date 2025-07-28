import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Digital Well-being Analysis (Capstone)",
    img: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?_gl=1*fe90u6*_ga*MTAwNzEzODg5MS4xNzUyNDAwOTMz*_ga_8JE65Q40S6*czE3NTM2MDEyNjMkbzQkZzEkdDE3NTM2MDMwMTMkajQzJGwwJGgw",
    desc: "Conducted an in-depth analysis of how screen time, sleep hours, Zoom meetings, and exercise influence burnout, mood, and work-life balance. Designed unique metrics and built an interactive Tableau dashboard to uncover meaningful patterns and actionable insights.",
    projectLink: "https://github.com/IyerShruti/Digital-Wellbeing-Analysis.git",
    blogLink: "https://medium.com/@iyershrutisuresh/from-doomscrolling-to-dashboarding-my-first-data-dive-into-burnout-93a9add36d0d"
  },
  {
    id: 2,
    title: "Netflix Trends Analysis",
    img: "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?_gl=1*ua918i*_ga*MTAwNzEzODg5MS4xNzUyNDAwOTMz*_ga_8JE65Q40S6*czE3NTM1OTQyNDIkbzIkZzEkdDE3NTM1OTQ0MzEkajE1JGwwJGgw",
    desc: "Analyzed global Netflix data to reveal viewing trends across genres, countries, and release years. Built interactive Tableau dashboards to showcase content popularity and seasonal patterns.",
    projectLink: "https://github.com/IyerShruti/Netflix-Content-Trend-Analysis.git"
  },
  {
    id: 3,
    title: "E-commerce Returns Analysis",
    img: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?_gl=1*1xfgnmh*_ga*MTAwNzEzODg5MS4xNzUyNDAwOTMz*_ga_8JE65Q40S6*czE3NTM2MDEyNjMkbzQkZzEkdDE3NTM2MDEyNzAkajUzJGwwJGgw",
    desc: "Examined product return and refund data to understand trends, reasons behind returns, and their impact on business performance. Leveraged data cleaning, visualization, and storytelling in Tableau to provide clear insights that can help optimize operations and improve customer satisfaction.",
    projectLink: "https://github.com/IyerShruti/E-Commerce-Returns-Analysis.git"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
            {item.blogLink && (
              <a href={item.blogLink} target="_blank" rel="noopener noreferrer">
                <button>View Blog</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>"My Dashboards"</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
