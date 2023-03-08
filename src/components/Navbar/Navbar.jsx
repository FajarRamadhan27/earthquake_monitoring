import React from "react"
import { AiOutlineGlobal, AiOutlineUnorderedList, AiTwotoneSetting,  AiOutlineQuestionCircle} from "react-icons/ai"

import "./Navbar.scss" 

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img alt="logo"/>
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