//css imports
import "./Navbar.css";
import "./Hero.css";

//animation imports
import {motion} from 'framer-motion';

//react imports
import { useEffect, useState,Suspense } from "react";

//3D modeling imports
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Html,useProgress } from "@react-three/drei";
import CuteRobot from "../../../public/robot(1)/CuteRobot.jsx";

const Header = ({ExploreBtnClick,ContactBtnClick})=>{

const {progress,active} = useProgress();
const [showLinks,setShowLinks] = useState(false);
const [animating,setAnimating] = useState(false);

const HeroParentVariants = {
  hidden: {opacity: 0},
  show: {opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.6
    }
  }
}

const NavbarLinksVariants = {
  hidden: {opacity: 0,y:-100},
  show: {opacity: 1,y:0},
}

function onBtnClick(){
   ExploreBtnClick();
}
  

  return <div className="Home_header">

    <section className="Navbar">
      <h1>RoboVerse</h1>

    <i style={{transform: showLinks ? "rotateY(180deg)" : "rotateY(0deg)"}} onClick={()=>setShowLinks(!showLinks)} id="hamburger" class="fa-solid fa-bars"></i>
    
    {showLinks || window.innerWidth > 850 ? <motion.div initial="hidden" animate="show" className="NavbarLinks">  
      <motion.p variants={NavbarLinksVariants} transition={{duration: 1.5,delay:0}} onClick={onBtnClick}>About</motion.p>
      <motion.p variants={NavbarLinksVariants} transition={{duration: 1.5,delay:0.3}} onClick={ContactBtnClick}>Contact</motion.p>
      <motion.p variants={NavbarLinksVariants} transition={{duration: 1.5,delay:0.6}}>Shop</motion.p>   
      <motion.button className={animating ? "animating" : null} onAnimationStart={()=>setAnimating(true)} onAnimationComplete={()=>setAnimating(false)} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1.5,delay:1.8}} onClick={()=>setShowLinks(false)}>Sign Up</motion.button>
      </motion.div>:null}
      
    </section>

    <section className="HeroSection">

     <motion.div variants={HeroParentVariants} initial='hidden' animate='show' className="HeroSectionLeft">
      <motion.h1 variants={{hidden:{opacity:0},show:{opacity:1}}}>Let’s buy the best Robots for you</motion.h1>
      <motion.p variants={{hidden:{opacity:0},show:{opacity:1}}}>Robots are a great way to solve everyday problems, tasks and deadlines without overwhelming ourselves</motion.p>
     <div className="heroBtnDiv">
     <motion.button variants={{hidden:{opacity:0},show:{opacity:1}}}>Start Shopping</motion.button>
     <motion.button variants={{hidden:{opacity:0},show:{opacity:1}}} onClick={onBtnClick}>Explore Us</motion.button>
     </div>
     </motion.div>

     <div className="HeroSectionRight">
       <Canvas id="cuteRobotCanvas" camera={{ position: [1, 5,3], fov: 75 }}>
       <OrbitControls enableZoom={false}/>
       <ambientLight />

        <Suspense fallback={<Html center>{progress.toFixed(1)}% loaded</Html>}>
        <CuteRobot scale={[2,2,2]}/>
        </Suspense>
       
       </Canvas>
     </div>

    </section>

    <section className="WebsiteTraffickSection">
    
    <div className="userImages">
    <img src="/images/men.jpg" alt="human" />
    <img src="/images/group.jpg" alt="human" />
    <img src="/images/woman.jpg" alt="human" />
    </div>
    
    <i class="fa-solid fa-circle"></i>

     <h1> 400k people online</h1>
    </section>
  
  </div>
}

export {Header};