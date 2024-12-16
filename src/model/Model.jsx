import "./model.css";

import { useParams } from "react-router-dom";

import {Canvas,} from "@react-three/fiber";
import {OrbitControls,Html,useProgress,Environment} from "@react-three/drei";

import { lazy, Suspense } from "react";

const Companion = lazy(()=>(import('../../public/robot_companion/Companion.jsx')));
const Household = lazy(()=>(import('../../public/robot_household/Household.jsx')));
const Security = lazy(()=>(import('../../public/robot_security/Security.jsx')));
const Education = lazy(()=>(import('../../public/robot_education/Education.jsx')));

function Model(){
  const {type} = useParams();
  const {progress,active} = useProgress();

 const array = [
  {name:"companion",price:1999,module:"<Companion />",description:"Your perfect little friend! This adorable companion robot is designed to keep you company, brighten your day, and respond to your emotions. Its cute size and playful features make it a joy to have around.",},
  {name:"security",price:2500,module:"<Security />",description:"Small in size but big on protection! This charming security robot keeps an eye on your space with advanced monitoring features, all while looking too cute to be intimidating."},
  {name:"household",price:4523,module:"<Household />",description:"Your tiny helper for everyday chores! This household robot assists with light tasks while adding a touch of cuteness to your home. Practical, efficient, and utterly lovable!"},
  {name:"education",price:3999,module:"<Education />",description:"A delightful teacher in a tiny package! This educational robot makes learning fun with interactive lessons and engaging activities for all ages. Smart, playful, and irresistibly adorable!"},
 ]

let target = array.find(result => result.name === type);

 if(target){
  return <div className="modelWrapper">

  <Canvas id="modelWrapperCanvas" camera={{ position: [2,3,5], fov: 75 }}>
   <OrbitControls/>
   <Environment preset="forest"/>
    <Suspense fallback={null}>
    <Education scale={[1,1,1]}/>
    </Suspense>
  </Canvas>

  <section>
    <h1>{target.name}</h1>
    <h2><span>By</span> RoboVerse</h2>

    <h3>{target.price}</h3>

    <p>{target.description}</p>

    <div>
      <button>-</button>
      <p>1</p>
      <button>+</button>
    </div>

    <button>ADD TO CART</button>
  </section>

</div>
 }
}

export default Model;