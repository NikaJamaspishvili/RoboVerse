import "./Home.css";

import { Header } from "./Header/Header";
import { About } from "./About/About";
import {FeedBack} from "./ClientFeedback/Feedback";

function Home(){
 return <div className="HomeWrapper">
   <div className="circleFog"></div>
    <Header />
    <div className="circleFog2"></div>
    <div className="circleFog3"></div>
    <div className="circleFog4"></div>
    <div className="circleFog5"></div>
    <About />
    <FeedBack />
 </div>
}

export default Home;
