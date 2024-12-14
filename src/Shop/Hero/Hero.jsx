import "./hero.css";

//animation imports
import {motion} from 'framer-motion';

let parentVariants={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.6
        }
    }
}

let childVariants={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
    }
}

let imageVariants={
    hidden:{opacity:0,
            rotateY:0,
            marginLeft:200
        },
    show:{opacity:1,
        rotateY:360,
        marginLeft:0,
        transition:{
            duration:1.5
        }
    }
}

const Hero = ()=>{
 return <motion.div variants={parentVariants} initial="hidden" animate="show" className="Shop_hero">
    <section>
    <motion.h1 variants={childVariants}>What Are You Waiting For?</motion.h1>
    <motion.p variants={childVariants}>"Explore our selection of four distinct types of robots, each designed to meet your needs. Enjoy a seamless shopping experience and find the perfect robot for you. Happy shopping!"</motion.p>
    </section>
    <motion.img variants={imageVariants} src="/images/shop_hero_robot.jpg" alt="two robots holding hands" />
 </motion.div>
}

export default Hero;