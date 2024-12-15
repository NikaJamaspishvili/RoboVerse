import "./header.css";

import { useNavigate } from "react-router-dom";

//animation imports
import {motion} from 'framer-motion';

const Header = ({containerRef})=>{

  let history = useNavigate();

  function scroll(index){
    containerRef.current[index].scrollIntoView({behavior:"smooth",block:"center"});
  }

  let parentVariants={
    hidden:{opacity: 0},
    show:{opacity: 1,
      transition:{
       duration: 1,
       staggerChildren: 0.6
      }
    },
  }

  let childVariants={
    hidden:{opacity: 0,marginTop:-200},
    show:{opacity: 1,marginTop:0},
  }

  return <div className="Shop_header">

    <h1>RoboVerse</h1>

    <motion.section variants={parentVariants} initial="hidden" animate="show">
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p onClick={()=>scroll(0)}>Companion</p></motion.div>
        <motion.div variants={childVariants} id="companion"><i class="fa-solid fa-circle" ></i><p onClick={()=>scroll(1)}>Security</p></motion.div >
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p onClick={()=>scroll(2)}>Household</p></motion.div >
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p onClick={()=>scroll(3)}>Education</p></motion.div >
    </motion.section>
    <motion.button onClick={()=>{history('/')}} variants={{hidden:{opacity: 0,marginTop:-200},show:{opacity:1,marginTop:0,transition:{duration:0.6,delay:2.5},}}} initial="hidden" animate="show"><i class="fa-solid fa-arrow-left"></i>Home</motion.button>
  </div>
}

export default Header;