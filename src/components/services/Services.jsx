

//import ComputerModelContainer from "./computer/ComputerModelContainer"

//import SecondModelContainer from "./secondComputer/SecondModelContainer"
import ReactModelContainer from "./reactlogo/ReactModelContainer"
import { i, img } from "motion/react-client"
import "./services.css"
import Counter from "./Counter";
import { animate, stagger } from "motion";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
//import { useInView } from "react-intersection-observer";

const textVariants={
  initial:{
    x:-100,
    y:-100,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
    },
  },
};
const listVariants = {
  initial:{
    x:-100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.5,
    },
  },
};
const services=[
{
  id:1,
  img:"/service1.png",
  title:"Web Development",
  counter:35,
},
{
  id:2,
  img:"/service2.png",
  title:"Product Design",
  counter:35,
},
{
  id:3,
  img:"/service3.png",
  title:"Branding",
  counter:46,
},
];
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin:"-200px"});
  return (
    <div className='services' ref={ref}>
        <div className="sServices left">
          <motion.h1 
          variants={textVariants} 
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
          >How do I help ?</motion.h1>

          <motion.div
          variants={listVariants} 
          animate={isInView ? "animate" : "initial"}
          className="serviceList">
            {services.map((service)=>(
            <motion.div 
              variants={listVariants}
              className="service"
              key={service.id}>
                <div className="serviceIcon">
                  <img src={service.img} alt="" />
                </div>
                <div className="serviceinfo">
                <h2>{service.title}</h2>
                <h3>{service.counter}Projects</h3> 
                </div>
            </motion.div>
            ))}
          </motion.div>
          <div className="counterList">
            <Counter from={0} to={104} text="Projects Completed"/>
            <Counter from={0} to={72} text="Happy Clients"/>
          </div>
        </div>
        <div className="sServices right">
        {/* <ComputerModelContainer/> */}
       {/* <SecondModelContainer/> */}
       <ReactModelContainer/>
        </div>
    </div>
  )
}

export default Services
