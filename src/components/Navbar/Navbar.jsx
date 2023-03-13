import React from "react"
import { AiOutlineGlobal, AiOutlineUnorderedList, AiTwotoneSetting,  AiOutlineQuestionCircle} from "react-icons/ai"

import "./Navbar.scss" 

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="logo-wrapper">
        <div className="app__navbar-logo">
          <img src="logo.svg" alt="logo"/>
        </div>
        <h2 className="primary-text">BPBD</h2>
      </div>
      <div className="app__navbar-menu">
        <AiOutlineUnorderedList/>
        <AiOutlineGlobal/>
        <AiTwotoneSetting/>
        <AiOutlineQuestionCircle/>
      </div>
    </nav>
  )
}

export default Navbar