import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.svg"
import Menu from './Menu'


const SignButton = () => {
  return ( <>
        <p> Sign in</p>
        <button type="button"> Sign Up</button>
  </>)
  }

const navbar = () => {

  const toggleSet = () =>{{toggleMenu 
    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
    :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
    } }

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_log">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
         <SignButton />
      </div>
      <div className="gpt3__navbar-menu">
     {toggleSet}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <SignButton />
              </div>
            </div>
          )}
      </div>
    </div>
  )
} 

export default navbar

