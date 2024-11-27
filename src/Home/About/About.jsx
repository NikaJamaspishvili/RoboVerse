//importing css files for each sections, so css files won't be too big
import "./about.css";
import "./aboutcompany.css";
import "./aboutrobot.css";

//animation imports
import {motion,useScroll,useAnimation,useTransform,useInView} from "framer-motion";

//react imports
import { useEffect, useRef } from "react";


//main about component which is root for all other components
const About = ({bodyRef}) => {
    return <div className="AboutWrapper" ref={bodyRef}>
        <AboutCompany />
        <AboutRobot />
    </div>
}

//component which renders company section of the about page
const AboutCompany = () => {

 const containerRef = useRef(null);
 const containerRef2 = useRef(null);

 const isInView = useInView(containerRef2,{once:false});
 const mainControls = useAnimation();

 const {scrollYProgress} = useScroll({
    target:containerRef,
    offset: ["start end","end end"]
 });

 const imageSectionValue = useTransform(
    scrollYProgress,
    [0,1],
    ["-100%","0%"]
 )
 
 const textSectionValue = useTransform(
    scrollYProgress,
    [0,1],
    ["100%","0%"]
 )

 useEffect(()=>{
  if(isInView){
    mainControls.start('visible');
  }
 },[isInView]);

    return <div className="AboutCompanyWrapper">
     <div className="AboutCompanyDiv" ref={containerRef}>
      <motion.section style={{translateX: imageSectionValue}} className="AboutCompanyImages">
        
        <div><img loading="lazy" src="/images/futuristic robot lab.jpg" alt="Robot Construction Image" /></div>
        
       <div><img loading="lazy" src="/images/robotConstruction.jpg" alt="Robot Construction Image" /></div>
      </motion.section>
      <motion.section style={{translateX: textSectionValue}} className="AboutCompanyText">
        <h1>High Quality Robots</h1>
        <p>Our Company Provides you with the  highest quality robots on the market to choose from.</p>
        <button>Buy Now</button>
      </motion.section>
      </div>

     <motion.div ref={containerRef2}
     animate={mainControls} 
     initial="hidden" 
     variants={{
      hidden: {opacity:0,y:100},
      visible: {
        opacity:1,
        y:0
      }
    }}
    transition={{delay:0.2}}
     className="OtherInfoDiv_pseudo">
     <div className="OtherInfoDiv">
        <h1>Awesome Experience with Us</h1>
        <div className="ImageGrid">
        <img loading="lazy" src="/images/robot with human.jpg" alt="" />
        <img loading="lazy" src="/images/robot with woman.jpg" alt="" />
        <img loading="lazy" src="/images/robot with men.jpg" alt="" />
        <img loading="lazy" src="/images/robot dj.jpg" alt="" />
        </div>
     </div>
     </motion.div>

    </div>
}

//component which renders robot section of the about page
const AboutRobot = () => {

    const sectionRef = useRef();

    const cardAnimationVariants = { 
        hidden:{opacity:0},   
        visible:{
        opacity:1,
        transition:{
             duration:0.4,
             staggerChildren:0.4,
         }
        }
    }

    const isInView = useInView(sectionRef,{once:false});
    const mainControls = useAnimation();

    useEffect(()=>{
    if(isInView){
        mainControls.start('visible');
    }
    },[isInView]);

    return <div className="AboutRobotWrapper" >
    <h1>Different species:</h1>

    <motion.section ref={sectionRef} variants={cardAnimationVariants} initial='hidden' animate={mainControls}>
        <motion.div variants={{hidden:{opacity:0},visible:{opacity:1}}}>
            <article>
                <h1>House Hold</h1>
                <p>Makes All Your Household Tasks.</p>
            </article>
            <button>View Robots <i class="fa-solid fa-arrow-right"></i></button>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},visible:{opacity:1}}}>
            <article>
                <h1>Security</h1>
                <p>Protects Your Home and You From anything considered dangerous.</p>
            </article>
            <button>View Robots <i class="fa-solid fa-arrow-right"></i></button>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},visible:{opacity:1}}}>
            <article>
                <h1>Companion</h1>
                <p>Conversation capabilities, emotional support, entertainment options.</p>
            </article>
            <button>View Robots <i class="fa-solid fa-arrow-right"></i></button>
        </motion.div>

        <motion.div variants={{hidden:{opacity:0},visible:{opacity:1}}}>
            <article>
                <h1>Education</h1>
                <p>Personalized learning plans, interactive quizzes, progress tracking...</p>
            </article>
            <button>View Robots <i class="fa-solid fa-arrow-right"></i></button>
        </motion.div>

    </motion.section>
    </div>
}

export {About};
