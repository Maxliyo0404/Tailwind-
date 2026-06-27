import "./Header.css";
import React from 'react'

function Header() {
  return (
    <header className="bg-green-950 py-5">
        <div className="container flex items-center justify-between">
            <div className="">
                <h1 className="title">Logo</h1>
                <ul className="list">
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">About</a></li>
                    <li className="item"><a href="#">Contact</a></li>
                    <li className="item"><a href="#">Services</a></li>
                </ul>
            </div>
        </div>
     
    </header>
  )
}

export default Header