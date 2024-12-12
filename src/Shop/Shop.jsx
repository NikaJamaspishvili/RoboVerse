import "./shop.css";

//component import

import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Robots from "./Robots/Robots.jsx";

function Shop(){
return <div className="Shop_Wrapper">
  <Header />
  <Hero />
  <Robots/>
</div>
}

export default Shop;