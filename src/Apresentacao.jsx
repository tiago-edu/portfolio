import React from "react";
import "./Apresentacao.css";
import mainFace from "./assets/mainFace.png";

const Apresentacao = () => {
  return (
    <>
      <div className="main">
        <div className="text-main">
          <h1>Front-End Developer.</h1>
          <p className="text">
            Hi There, i'm Tiago Moreira. I am passionate about technology and
            creating amazing and intuitive user experiences. My goal is always
            to exceed user expectations by creating clean, elegant and efficient
            designs.
          </p>
        </div>
        <img src={mainFace} className="facePhoto"alt="face" />
      </div>
    </>
  );
};

export default Apresentacao;
