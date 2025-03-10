//import { link } from "motion/react-client"
//import { div } from "motion/react-client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./portfolio.css";
import { useState } from "react";



const items = [
  {
    id:1,
    img:"/p1.jpg",
    title:"Web Full Stack Blog Application",
    desc:"Hello here is the full stack blog Application",
    link:"/",
  },
  {
    id:2,
    img:"/p2.jpg",
    title:"School Mangement System",
    desc: "Hello here is the School Mangement System",
     link:"/",
   
  },
  {
    id:3,
    img:"/p3.jpg",
    title:"Real-time Chat Application",
    desc: " Hello here is the Real-time Chat Application",
     link:"/",
  
  },
  {
    id:4,
    img:"/p4.jpg",
    title:"Socal Media Application",
    desc: "Hello here is the Real-time Chat Application",
     link:"/",
  
  },
  {
    id:5,
    img:"/p5.jpg",
    title:"Animated Portfolio Website",
    desc: "Hello here is the Real-time Chat Application",
     link:"/",
  
  },
];

const imgVariants={
  inital:{
    x: -500,
    y: 500,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:0.5,ease:"easeInOut"
    },
  },
};
const textVariants={
  inital:{
    x: 500,
    y: 500,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      ease:"easeInOut",
      staggerChildren:0.05,
    },
  },
};

const ListItem = ({item})=>{
 const ref = useRef();
 const isInView = useInView(ref,{margin:"-100px"});

  return(
    <div className="pItem" ref={ref}>
      <motion.div className="pImg"
      variants={imgVariants}
      animate={isInView ? "animate":"inital"}
      >
        <img src={item.img} alt="" /> 
      </motion.div>
      <motion.div className="pText"
      variants={textVariants}
      animate={isInView ? "animate":"inital"}
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Button</button>
        </motion.a>
      </motion.div>
    </div>
  )
}

const Portfolio = () => {
  const[contianerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(()=>{
    if(ref.current){
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  
    }, []);
  

  const {scrollYProgress} = useScroll({target:ref})
  const xTranslate = useTransform(scrollYProgress,[0,1],
    [0,-window.innerWidth * items.length]);
  
  return (
    <div className='portfolio' ref={ref}>
      <motion.div className="pList" style={{x:xTranslate}}>
        <div 
        className="empty" 
        style={{width:window.innerWidth-contianerDistance}}/>
        

       
      {items.map((item) => (
        <ListItem item={item} key={item.id}/>
      ))}
       </motion.div>
       <section/>
       <section/>
       <section/>
       <section/>      
       <section/> 
       <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle 
              cx="80"
              cy="80" 
              r="70" 
              fill="none" 
              stroke="#ddd" 
              strokeWidth={20}
            />
            <motion.circle 
              cx="80" 
              cy="80" 
              r="70" 
              fill="none" 
              stroke="#DD4C62" 
              strokeWidth={20}
              style={{pathLength:scrollYProgress}}
              transform="rotate(-90 80 80)"
            />
          </svg>
       </div>
    </div>
  )
}

export default Portfolio