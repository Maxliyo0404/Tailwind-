import { useEffect, useState } from "react";
import "./Header.css";
import React from 'react'
import { Link } from "react-router-dom";

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
                <h1 className="text-4xl text-white font-bold">Logo</h1>
                <ul className="list flex items-center gap-5">
                    <li className="text-white text-2xl "><Link to={home}>Home</Link></li>
                    <li className="text-white text-2xl "><Link to={about}>About</Link></li>
                    <li className="text-white text-2xl "><Link to={contact}>Contact</Link></li>
                    <li className="text-white text-2xl "><Link to={services}>Services</Link></li>
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