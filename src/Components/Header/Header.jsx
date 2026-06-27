import "./Header.css";
import React from 'react'

function Header() {
  return (
    <header>
     <div className="cards">
        <div className="container">
            <div className="card">
                <h1 className="title">Logo</h1>
                <ul className="list">
                    <li className="item"><a href="#">Home</a></li>
                </ul>
            </div>
        </div>
     </div>
    </header>
  )
}

export default Header