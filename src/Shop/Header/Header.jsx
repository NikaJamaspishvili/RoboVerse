import "./header.css";

//animation imports
import {motion} from 'framer-motion';

const Header = ()=>{

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
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p>Educational</p></motion.div>
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p>Companion</p></motion.div >
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p>Household</p></motion.div >
        <motion.div variants={childVariants}><i class="fa-solid fa-circle"></i><p>Security</p></motion.div >
    </motion.section>
    <motion.button variants={{hidden:{opacity: 0,marginTop:-200},show:{opacity:1,marginTop:0,transition:{duration:0.6,delay:2.5},}}} initial="hidden" animate="show"><i class="fa-solid fa-arrow-left"></i>Home</motion.button>
  </div>
}

export default Header;