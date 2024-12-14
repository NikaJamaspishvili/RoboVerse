import "./shop.css";

//component import

import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Robots from "./Robots/Robots.jsx";
import Footer from "./Footer/Footer.jsx";

function Shop(){
return <div className="Shop_Wrapper">
  <div className="circle"></div>
  <Header />
  <div className="circle2"></div>
  <Hero />
  <div className="circle3"></div>
  <Robots />
  <div className="circle4"></div>
  <Footer />
  <div className="circle5"></div>
  <div className="circle6"></div>

</div>
}

export default Shop;