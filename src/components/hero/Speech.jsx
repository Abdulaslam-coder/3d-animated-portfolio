import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div 
      className="bubbleContainer"
      animate={{opacity:[0,1]}}
      transition={{duration:1}}
    >
        <div className="bubble"> 
            <TypeAnimation
      sequence={[
        
        
        1000, 
        'I build powerful Wordpress Website...',
        1000,
        'Creating a stunning websites that converts...',
        1000,
        
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    /></div>
        <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech