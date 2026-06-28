import { Link } from "react-router-dom";
import "./Footer.css";
import React from 'react'

function Footer() {
  return (
    <div className="bg-blue-700 py-4">
        <div className="container flex items-center justify-between">
            <h1 className="text-4xl text-white font-bold">Logo</h1>
                <ul className="list flex items-center gap-5">
                    <li className="text-white text-2xl "><Link to="home">Home</Link></li>
                    <li className="text-white text-2xl "><Link to="about">About</Link></li>
                    <li className="text-white text-2xl "><Link to="contact" onClick={(e)=> e.preventDefault()}>Contact</Link></li>
                    <li className="text-white text-2xl "><Link to="services" onClick={(e)=> e.preventDefault()}>Services</Link></li>
                </ul>
        </div>
    </div>
  )
}

export default Footer