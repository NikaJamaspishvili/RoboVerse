//css imports
import "./contact.css";

//react imports
import { useEffect, useState } from "react";

const Contact = ({contactRef}) =>{

const[messageValue,setMessageValue] = useState('');
const [btnClick,setBtnClick] = useState(false);
const [showCheckmark,setShowCheckmark] = useState(false);
const [showWarning,setShowWarning] = useState(false);

function messageSent(e){
    setMessageValue(e.target.value);
}

function onBtnClick(){
if(messageValue !== ''){
   setBtnClick(true);
}else{
 setShowWarning(true);
}
}

useEffect(() => {

   if(showCheckmark){
   const newInterval = setInterval(()=>{
    setShowCheckmark(false);
    setBtnClick(false);
    setMessageValue('');
   },2000);

   return ()=>clearInterval(newInterval);
   }

   if(btnClick){
      const interval = setInterval(() => {
       setShowCheckmark(true);
      }, 3000);
   
      return () => clearInterval(interval)
   }
 }, [btnClick,showCheckmark]);

 useEffect(()=>{
 if(showWarning){
 const interval = setInterval(()=>{
    setShowWarning(false);
 },5000)

 return ()=> clearInterval(interval);
 }
 },[showWarning])

return <div className="contactWrapper" ref={contactRef}>

     <section>
     <h1>Want to contact?</h1>
     <p>Get in touch with our operators through the message down below or follow us on social medias :  </p>
     <div>
         <div id="warningWrapper">
         <textarea onChange={messageSent} maxLength={150} value={messageValue} placeholder="Enter Your Message..."></textarea>
         {showWarning && <p id="warningMessage"> Please Insert The Message First <i class="fa-solid fa-triangle-exclamation"></i></p>}
         </div>
        <button onClick={onBtnClick}>{showCheckmark ? <i id="checkmark" class="fa-solid fa-square-check"></i> : btnClick && !showCheckmark ? <i id="spinner" class="fa-solid fa-spinner"></i> : !btnClick && !showCheckmark && <div id="message">send<i class="fa-solid fa-square-arrow-up-right"></i></div>}</button>
     </div>

     <div className="contactLinks">
        <img src="https://static.vecteezy.com/system/resources/previews/045/934/243/non_2x/instagram-logo-icon-transparent-background-free-png.png" alt="instagram" />
        <img src="https://i.pinimg.com/736x/b8/14/2d/b8142d5006f9da1e0ba1c0fce1f9c487.jpg" alt="facebook" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/046/853/019/small_2x/twitter-x-black-and-white-logo-transparent-background-free-png.png" alt="twitter" />
     </div>
     </section>
     
     <img src="/images/touchinghands.png" alt="image of two hands touching together with linear-gradient colors, mostly pink" />
</div>
}

export {Contact};