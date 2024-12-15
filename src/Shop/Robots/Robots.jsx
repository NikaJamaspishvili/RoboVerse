//css imports
import "./Robots.css";

//react imports
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

//animation imports
import { motion, useInView, useAnimation } from "framer-motion";

const Robots = ({containerRef}) => {

  const history = useNavigate();

  const robots = [
    { id: "companion", title: "Companion", img: "/images/companion.png" },
    { id: "security", title: "Security", img: "/images/security.png" },
    { id: "household", title: "Household", img: "/images/household.png" },
    { id: "education", title: "Education", img: "/images/education.png" },
  ];

  return (
    <div className="robotModelsDiv">
      {robots.map((robot, index) => (

        <div key={robot.id} ref={(el)=>{containerRef.current[index] = el}}>
          {index % 2 === 0 && (
            <motion.section>
              <h1>{robot.title}</h1>
              <button onClick={() => history("/model/"+robot.id)}>View Model</button>
            </motion.section>
          )}
          <motion.img
            src={robot.img}
            alt={`${robot.title} robot image`}
          />
          {index % 2 !== 0 && (
            <motion.section>
              <h1>{robot.title}</h1>
              <button onClick={() => history("/model/"+robot.id)}>View Model</button>
            </motion.section>
          )}
        </div>
))}
    </div>
  );
};

export default Robots;
