import "./Header.css";
import React from 'react'

function Header() {
  return (
    <header className="bg-yellow-400 py-5">
        <div className="container flex items-center justify-between">
            <div className="flex items-center justify-between">
                <h1 className="title">Logo</h1>
                <ul className="list">
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">About</a></li>
                    <li className="item"><a href="#">Contact</a></li>
                    <li className="item"><a href="#">Services</a></li>
                </ul>
                <button className="bg-pink-300">yuborish</button>
            </div>
        </div>
     
    </header>
  )
}

export default Header