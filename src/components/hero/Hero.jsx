
import { animate } from "motion";
import "./hero.css"
import Speech from "./Speech";
import {motion} from "motion/react"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape from "./Shape";
const awardVariants ={
    initial:{
        x:-100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
        duration:1,
        staggerChildren:0.2,
        }
    }

}
const followVariants ={
    initial:{
        y:-100,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
        duration:1,
        staggerChildren:0.2,
        }
    }

}
const hero = () => {
  return (
    <div className="hero">
        <div className="hSection left">
            {/* TITLE */}
            <motion.h1 
            initial={{y:-100, opacity:0}}
            animate={{y:0,opacity:1}} 
            transition={{duration:1}}
            className="hTitle">
                Hey There,
                <br/>
                <span> I'm AbdulSalam </span>
            </motion.h1>
            {/* AWARDS */}
            <motion.div  variants={awardVariants}  initial="initial" animate="animate" className="awards">
                <motion.h2 variants={awardVariants}>Top Rated Developer</motion.h2>
                <motion.p variants={awardVariants}>I am Wordpress Developer having 3+ years of experience.</motion.p>
                <motion.div variants={awardVariants} className="awardList">
                    <motion.img variants={awardVariants} src="/award1.png" alt="" />
                    <motion.img variants={awardVariants} src="/award2.png" alt="" />
                    <motion.img variants={awardVariants} src="/award3.png" alt="" />
                </motion.div>
            </motion.div>
            {/* SCROLL SVG */}
            <motion.a
            animate={{y:[0,5],opacity:[0,1,0]}}
            transition={{
                repeat:Infinity,
                duration:4,
                ease:"easeInOut",
            }}

             href="#services" 
             className="scroll">
            <svg 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="white"
                    strokeWidth="2"
                >
                    {/* <!-- Mouse Body --> */}
                    <rect 
                        x="6" 
                        y="2" 
                        width="12" 
                        height="20" 
                        rx="6" 
                        stroke="white" 
                        strokeWidth="1" 
                        fill="none"
                    />
                    
                    {/* <!-- Scroll Wheel --> */}
                    <line 
                        x1="12" 
                        y1="6" 
                        x2="12" 
                        y2="10" 
                        stroke="white" 
                        strokeWidth="1"
                    />
            </svg>

            </motion.a>
        </div>
        <div className="hSection right">
            {/* Follow */}
            <motion.div  
                variants={followVariants} 
                initial="initial" 
                animate="animate"
                className="follow">
                <motion.a  variants={followVariants} href="">
                    <img src="/instagram.png" alt="" />
                </motion.a>
                <motion.a variants={followVariants} href="">
                    <img src="/facebook.png" alt="" />
                </motion.a>
                <motion.a  variants={followVariants} href="">
                    <img src="/youtube.png" alt="" />
                </motion.a>
                <motion.div  variants={followVariants} className="followTextContainer">
                    <div className="followText">Follow me</div>
                </motion.div>
            </motion.div>
            {/* Bubble */}
            <Speech/>
            {/* Certificate */}
            <motion.div 
            className="certificate"
            animate={{opacity:[0,1]}}
            transition={{duration:1}}
            >
                <img src="/certificate.png" alt="" />
                LMA CERTIFICATE<br/>
                PROFESSIONL<br/>
                WORDPRESS DEVELOPER
            </motion.div>
             {/* Contact Button */}
             <motion.a href="/#contact" 
             className="contactLink"
             animate={{
                x:[200,0],
                opacity:[0,1]}}
             transition={{duration:2}}
             >
             <motion.div 
             className="contactButton"
             animate={{rotate:[0,360]}}
             transition={{
                duration:10,
                repeat: Infinity,
                ease:"linear"
             }}
             >
                <svg viewBox="0 0 200 200" width="150" height="150">
                    <circle cx="100" cy="100" r="90" fill="pink" />
                    <path id="innerCirclePath"
                    fill="none"
                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"/>
                    <text className="circleText">
                        <textPath href="#innerCirclePath">Hire Now . </textPath>
                    </text>
                    <text className="circleText">
                        <textPath href="#innerCirclePath" startOffset="44%">Contact Me . </textPath>
                    </text>
                </svg>
                <div className="arrow">
                    
                    <svg 
                        width="50" 
                        height="50" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>

                </div>
             </motion.div>
             </motion.a>
        </div>
    
       
        <div className="bg">
                {/* 3d */}
            <Canvas>
                <Suspense fallback="loading...">    
                <Shape/>
                </Suspense>  
            </Canvas>
                <div className="hImg">
                    <img src="./hero.png" alt="" />
                </div>
        </div>
       
    </div>
  )
}

export default hero