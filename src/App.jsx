import "./App.css";
import React from 'react'

function App() {
  return (
    // mx-auto va max-w-7xl markazlash uchun ishlatiladi
    // bg-black to'g'ri, lekin ranglar uchun text-white alohida bo'lishi kerak
    <div className="bg-black mx-auto max-w-[1200px] p-5"> 
      
      <h1 className="text-8xl text-white">Welcome Tailwind</h1>
      
      <ul className="list-disc text-white">
        <li className="item">
          {/* text-2xl alohida, text-white alohida */}
          <h2 className="text-4xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </h2>
          <p className="text-2xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia voluptates ipsam corrupti doloribus autem, necessitatibus officia optio esse ipsum doloremque vitae ad, voluptatum commodi, illum cum aspernatur eius pariatur.</p>
        </li>
      </ul>
    </div>
  )
}

export default App