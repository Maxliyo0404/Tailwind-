import { useState } from "react";
import "./Header.css";
import React from 'react'

function Header() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="bg-yellow-400 py-5">
        <div className="container ">
            <div className="flex items-center justify-between">
                <h1 className="title">Logo</h1>
                <ul className="list flex items-center gap-5">
                    <li className="text-white "><a href="#">Home</a></li>
                    <li className="text-white "><a href="#">About</a></li>
                    <li className="text-white "><a href="#">Contact</a></li>
                    <li className="text-white "><a href="#">Services</a></li>
                </ul>
                <button onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
     
    </header>
  )
}

export default Header