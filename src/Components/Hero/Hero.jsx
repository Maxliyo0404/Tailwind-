import "./Hero.css";
import React from 'react'

function Hero() {
  return (
    <div className="w-full h-screen relative">
        <img 
    
          className="w-full h-full object-cover transition-all duration-500 dark:brightness-[0.4]" 
          src="src/Components/Hero/image/nature.jpg" 
          alt="tabiat" 
        />
    </div>
  )
}

export default Hero