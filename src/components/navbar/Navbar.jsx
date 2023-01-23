import React from 'react'
//import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.svg"

const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-log">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#WIGPT">What is GPT3</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#feature">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
         <p> Sign in</p>
         <button type="button"> Sign Up</button>
        </div>
    </div>
  )
} 

export default navbar
