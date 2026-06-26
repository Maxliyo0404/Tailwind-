import "./App.css";
import React from 'react'

function App() {
  return (
    
    <div className="bg-black mx-auto max-w-[1200px] p-5"> 
      
      <h1 className="text-4xl text-white">Welcome Tailwind</h1>
      
      <ul className="list-disc text-white">
        <li className="item">
          {/* text-2xl alohida, text-white alohida */}
          <h2 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </h2>
        </li>
      </ul>
    </div>
  )
}

export default App