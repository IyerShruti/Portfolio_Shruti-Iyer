import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://drive.google.com/file/d/1Ni2kCumFiXoB0lRZV3PJGpJ0EubvbEhw/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
            <button>Download Resume</button>
          </a>
          <a href="https://www.credly.com/badges/c6231420-2f86-47bd-9f3a-1aa2b12830dc/public_url" target="_blank" rel="noopener noreferrer" >
            <img src="/badge.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shrutisureshiyer/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt=""  />
          </a>
          <a href="https://github.com/IyerShruti" target="_blank" rel="noopener noreferrer" >
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
