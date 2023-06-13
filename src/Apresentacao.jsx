import React from "react";
import "./Apresentacao.css";
import face2 from "./assets/face.png";

const Apresentacao = () => {
  return (
    <>
      <div className="main">
        <div className="text-main">
          <h1>Front-End Developer.</h1>
          <p>
            Hi There, i'm Tiago Moreira. I am passionate about technology and
            creating amazing and intuitive user experiences. My goal is always
            to exceed user expectations by creating clean, elegant and efficient
            designs.
          </p>
        </div>
        <img src={face2} className="facePhoto"alt="face" />
      </div>
    </>
  );
};

export default Apresentacao;
