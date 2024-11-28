//css imports
import "./feedback.css";
import "./companyOverview.css";
import "./clientFeedback.css";

//framer motion imports
import {motion,useAnimation,useTransform,useInView} from "framer-motion";

//react imports
import {useEffect, useRef} from "react";

const FeedBack = () => {
  return <div className="feedbackWrapper">
    <ClientFeedBack />
    <CompanyOverview />
  </div>
}

const ClientFeedBack = () =>{

const cardContainterRef = useRef(null);

let isInView2 = useInView(cardContainterRef);

let cardControls = useAnimation();

let cardSectionVariants = {
  hidden: {opacity:0,y:100},
  visible: {opacity:1,
    y:0,
    transition:{
    duration:0.6,
    staggerChildren:0.6
  }},
}

useEffect(()=>{
  if(isInView2){
    cardControls.start('visible');
  }
},[isInView2])


return <div className="clientFeedbackWrapper">
       <h1>What our clients say</h1>
       <p>See what our customer say about us. It really matter for us. How good or bad
       we will make ir for evaluation to make EhyalLive better.</p>
<motion.section variants={cardSectionVariants} initial="hidden" animate={cardControls} className="feedbackCards" ref={cardContainterRef}>
       <motion.div variants={{hidden:{opacity:0,y:100},visible:{opacity:1,y:0}}}  className="firstFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“These robots are a game-changer. Superior quality, flawless performance, and the price is shockingly affordable. Worth every penny!”</p>
        <div>
          <img src="/images/firstgirl.jpg"/>
          <section>
            <h1>Denny Hilguston</h1>
            <p>@denny.hill</p>
          </section>
        </div>
       </motion.div>

       <motion.div variants={{hidden:{opacity:0,y:100},visible:{opacity:1,y:0}}} className="secondFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“The robots are top-notch. They offer amazing performance, are incredibly precise, and yet cost much less than expected. A great deal!”</p>
        <div>
          <img src="/images/secondgirl.jpg" />
          <section>
            <h1>Vani Pandey</h1>
            <p>@vani.pandey</p>
          </section>
        </div>
       </motion.div>

       <motion.div variants={{hidden:{opacity:0,y:100},visible:{opacity:1,y:0}}} className="thirdFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“Impressed by these robots! The quality is unbeatable, and they work flawlessly. The price is incredibly low for such advanced technology.”</p>
        <div>
          <img src="/images/thirdgirl.jpg" />
          <section>
            <h1>milly Singh</h1>
            <p>@milly.singh</p>
          </section>
        </div>
       </motion.div>
</motion.section>
    </div>
}

const CompanyOverview = () =>{

 let imageRef = useRef(null);

 let imageInView = useInView(imageRef);

 let mainControls = useAnimation();

 useEffect(()=>{
  
  if(imageInView){
    mainControls.start('visible');
  }

 },[imageInView])

let mainVariants = {
  hidden:{opacity:0,scale:0.8},
  visible:{
    opacity:1,
    scale:1,
    transition:{
      duration:0.5,
      staggerChildren:0.5
    }
  }
}

let childrenVariants = {
  hidden:{opacity:0,scale:0.8},
  visible:{
    opacity:1,
    scale:1,
    transition:{
      duration:0.5,
      staggerChildren:0.5
    }
  }
}

    return <div className="companyOverviewWrapper">
        <section className="leftSection">
          <h1>Our company values You 💕</h1>
           <p>We specialize in creating best robots on the market for the cheapest prices.</p>
        </section>

        <motion.section variants={mainVariants}  initial="hidden" animate={mainControls} ref={imageRef} className="rightSection">
          <motion.div variants={childrenVariants}>
          <img src="/images/hand.png" alt="fingers icon" /> 
          <p>Be Sincere</p>
          </motion.div>

          <motion.div variants={childrenVariants}>
          <img src="/images/handshake.svg" alt="handshake icon" /> 
          <p>Stronger together</p>
          </motion.div>

          <motion.div variants={childrenVariants}>
          <img src="/images/checkmark.svg" alt="checkmark icon" /> 
          <p>Keep it simple</p>
          </motion.div>

          <motion.div variants={childrenVariants}>
          <img src="/images/bulb.svg" alt="bulb icon" /> 
          <p>Take intelligent risks</p>
          </motion.div>

        </motion.section>
    </div>
}

export {FeedBack};