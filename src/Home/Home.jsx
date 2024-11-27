import "./Home.css";

import {useRef} from 'react';

import { Header } from "./Header/Header";
import { About } from "./About/About";
import {FeedBack} from "./ClientFeedback/Feedback";
import { Contact } from "./Contact/Contact";

function Home(){

let bodyRef = useRef(null);
let contactRef = useRef(null);

function  ExploreBtnClick(){
    bodyRef.current.scrollIntoView({behavior: 'smooth'});
}

function ContactBtnClick() {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
}

 return <div className="HomeWrapper">
   <div className="circleFog"></div>
    <Header ExploreBtnClick={ExploreBtnClick} ContactBtnClick={ContactBtnClick}/>
    <div className="circleFog2"></div>
    <div className="circleFog3"></div>
    <div className="circleFog4"></div>
    <div className="circleFog5"></div>
    <About bodyRef={bodyRef}/>
    <div className="circleFog6"></div>
    <div className="circleFog7"></div>
    <FeedBack />
    <div className="circleFog8"></div>
    <Contact contactRef={contactRef}/>
 </div>
}

export default Home;
