import "./Section.css"
import React from 'react'
import nature2 from "./nature2.jpg"

function Section() {
  return (
    <div className="w-full h-screen">
        <img 
          className="w-full h-full object-cover transition-all duration-500 dark:brightness-[0.4]" 
          src={nature2} 
          alt="tabiat" 
        />
    </div>
  )
}

export default Section;