//css imports
import "./Robots.css";

//react imports
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

//animation imports
import { motion, useScroll, useTransform } from "framer-motion";

const Robots = () => {
  const containerRefs = useRef([]);

  const scrollData = containerRefs.current.map((ref) => {

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
    });

    return useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  });

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

        <div key={robot.id} ref={(el)=>{return containerRefs.current[index] = el}}>
          {index % 2 === 0 && (
            <motion.section style={{ translateX: scrollData[index] }}>
              <h1>{robot.title}</h1>
              <button onClick={() => history("/model/"+robot.id)}>View Model</button>
            </motion.section>
          )}
          <motion.img
            style={{ translateX: scrollData[index] }}
            src={robot.img}
            alt={`${robot.title} robot image`}
          />
          {index % 2 !== 0 && (
            <motion.section style={{ translateX: scrollData[index] }}>
              <h1>{robot.title}</h1>
              <button onClick={() => history(robot.id)}>View Model</button>
            </motion.section>
          )}
        </div>
))}
    </div>
  );
};

export default Robots;
