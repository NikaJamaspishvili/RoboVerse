import "./model.css";

import { useParams } from "react-router-dom";

import {Canvas,} from "@react-three/fiber";
import {OrbitControls,Html,useProgress,Environment, useFBO} from "@react-three/drei";

import { motion } from "framer-motion";

import { lazy, Suspense,useState,useEffect } from "react";
import { Scene } from "three";

const Companion = lazy(()=>(import('../../public/robot_companion/Companion.jsx')));
const Household = lazy(()=>(import('../../public/robot_household/Household.jsx')));
const Security = lazy(()=>(import('../../public/robot_security/Security.jsx')));
const Education = lazy(()=>(import('../../public/robot_education/Education.jsx')));

function Model(){
  const {type} = useParams();
  
  const [quantity,setQuantity] = useState(1);
  const [btnValue,setBtnValue] = useState("text");
  const [seconds,setSeconds] = useState(0);
  const [btnClick,setBtnClick] = useState(false);

  const count = 7;

  useEffect(() => {
    if(btnClick === true){
   if(seconds >= 0){
    const timer = setTimeout(() => {
      setSeconds((prevCount) => prevCount - 1);
    }, 1000);

    if (seconds === 2) {
      setBtnValue('checkmark');
    }

    return () => clearTimeout(timer);
  }else{
      setBtnValue('text');
      setBtnClick(false);
  }
  }
  
  }, [seconds,btnClick]);

  function handleClick(){
    if(btnValue === 'text'){
      setBtnValue('empty');
      setBtnClick(true);
      setSeconds(7);
    }
  }

let parentVariants = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        duration:2,
        staggerChildren:.2
      }
    }
  }

  let childrenVariants = {
    hidden:{opacity:0},
    show:{opacity:1}
  }

  const array = [
  {name:"companion",price:1999,module:"<Companion />",description:"Your perfect little friend! This adorable companion robot is designed to keep you company, brighten your day, and respond to your emotions. Its cute size and playful features make it a joy to have around.",},
  {name:"security",price:2500,module:"<Security />",description:"Small in size but big on protection! This charming security robot keeps an eye on your space with advanced monitoring features, all while looking too cute to be intimidating."},
  {name:"household",price:4523,module:"<Household />",description:"Your tiny helper for everyday chores! This household robot assists with light tasks while adding a touch of cuteness to your home. Practical, efficient, and utterly lovable!"},
  {name:"education",price:3999,module:"<Education />",description:"A delightful teacher in a tiny package! This educational robot makes learning fun with interactive lessons and engaging activities for all ages. Smart, playful, and irresistibly adorable!"},
  ];

  let target = array.find(result => result.name === type);

 if(target){
  return <div className="modelWrapper">
   <button id="backButton"><i class="fa-solid fa-arrow-left" onClick={()=>{window.history.back()}}></i></button>
  <Canvas id="modelWrapperCanvas" style={{height:"70svh",maxWidth:"450px"}} camera={{ position: [4,4,4], fov: 75 }}>
   <OrbitControls/>
   <Environment preset="dawn"/>
    <Suspense fallback={<Html><div><i class="fa-solid fa-spinner"></i></div></Html>}>
    {type === "companion" && <Companion scale={[1.5, 1.5, 1.5]} />}
    {type === "security" && <Security scale={[1.5, 1.5, 1.5]} />}
    {type === "household" && <Household scale={[2, 2, 2]} />}
    {type === "education" && <Education scale={[0.2,0.2,0.2]} />}   
    </Suspense>
  </Canvas>

  <motion.section variants={parentVariants} initial="hidden" animate="show">
   
   <motion.div className="productHeader">
    <motion.h1 variants={childrenVariants}>{target.name.toUpperCase()}</motion.h1>
    <motion.h2 variants={childrenVariants}><span>By</span> RoboVerse</motion.h2>
   </motion.div>
    <motion.h3 variants={childrenVariants}>${target.price}</motion.h3>

    <motion.p variants={childrenVariants}>{target.description}</motion.p>
    
    <motion.div  variants={childrenVariants} className="quantityButton">
    <p>Quantity</p>
    <div>
      <button onClick={()=>{quantity !== 1 && setQuantity(quantity-1)}}><i class="fa-solid fa-minus"></i></button>
      <p>{quantity}</p>
      <button onClick={()=>{setQuantity(quantity+1)}}><i class="fa-solid fa-plus"></i></button>
      </div>
    </motion.div>

    <motion.button style={{animation:btnValue !== "text" && "btnAnimation "+count+"s"}} onClick={handleClick} variants={childrenVariants}>{btnValue === "text" ? "BUY NOW":btnValue === "checkmark" && <i class="fa-solid fa-check"></i>}</motion.button>
  </motion.section>

</div>
 }
}

export default Model;