import { Link } from "react-router-dom";
import "./Footer.css";
import React from 'react'

function Footer() {
  return (
    <div className="bg-blue-700 py-4">
        <div className="container flex items-center justify-between">
            <h1 className="text-4xl text-white font-bold">Logo</h1>
                <ul className="list flex items-center gap-5">
                    <li className="text-white text-2xl "><a href="#">Home</a></li>
                    <li className="text-white text-2xl "><a href="#">About</a></li>
                    <li className="text-white text-2xl "><a href="#">Contact</a></li>
                    <li className="text-white text-2xl "><a href="#">Services</a></li>
                </ul>        </div>
    </div>
  )
}

export default Footer