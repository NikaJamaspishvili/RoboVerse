//css imports
import "./Robots.css";

//component imports
import Companion from "./Robot/Companion";
import Security from "./Robot/Security";
import Household from "./Robot/Household";
import Education from "./Robot/Education";

const Robots=()=>{
  return <div className="robotModelsDiv">
    <Companion/>
    <Security/>
    <Household/>
    <Education/>
  </div>
}

export default Robots;