import "./Section.css"
import React from 'react'

function Section() {
  return (
    <div className="w-full h-screen">
        <img 
          className="w-full h-full object-cover transition-all duration-500 dark:brightness-[0.4]" 
          src="src/Components/Main/Section/nature2.jpg" 
          alt="tabiat" 
        />
    </div>
  )
}

export default Section