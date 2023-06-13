import React from "react";
import linkFoto from "./assets/linkedin.png";
import gitFoto from "./assets/github 2.svg";
import instFoto from "./assets/instagram 3.svg";
import "./Header.css"



const Header = () => {
  return (
    <>
  

  <div className="header">
      {/* Head */}
      <a href="https://www.linkedin.com/in/tiago-moreira-544a49207/">
        <img  className="button-img" src={linkFoto} alt="LinkedIn" />
      </a>  
      <a href="https://github.com/tiago-edu">
        <img  className="button-img" src={gitFoto} alt="Github" />
      </a>

      <a href="https://www.instagram.com/edu.tiago_/">
        <img className="button-img" src={instFoto} alt="Instagram" />
      </a>
    </div>
  </>
  )
}

export default Header