import { useEffect, useState } from "react";
import "./Header.css";
import React from 'react'

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect (()=>{
        if (darkMode){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        }else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }  
    }, [darkMode])
  return (
    <header className="bg-black py-5">
        <div className="container ">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl text-white bold">Logo</h1>
                <ul className="list flex items-center gap-5">
                    <li className="text-white "><a href="#">Home</a></li>
                    <li className="text-white "><a href="#">About</a></li>
                    <li className="text-white "><a href="#">Contact</a></li>
                    <li className="text-white "><a href="#">Services</a></li>
                </ul>
                <button className="text-3xl" onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
     
    </header>
  )
}

export default Header