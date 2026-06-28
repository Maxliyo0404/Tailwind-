import "./Hero.css";
import React from 'react'

function Hero() {
  return (
    <div className="w-full h-screen">
        <img 
          className="w-full h-full object-cover" 
          src="src/Components/Hero/image/nature.jpg" 
          alt="tabiat" 
        />
    </div>
  )
}

export default Hero