import "./App.css";
import React from 'react'
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}>
   <Route path="home" element={<Home/>}/>
   <Route path="about" element={<About/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
   
   
    </>
  )
}

export default App