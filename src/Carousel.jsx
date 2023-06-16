import "./Carousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
// import { generateSlides } from 'util';
import "@splidejs/react-splide/css";
import fotoCVA from "./assets/homeCVA.png";
import gitFoto from "./assets/github 2.svg";
import instFoto from "./assets/instagram 3.svg";
import nodeJsFoto from "./assets/icons8-node-js-48.png";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import styled from "styled-components";

const Carrousel = () => {
  const StyledFaNodeJs = styled(FaNodeJs)`
    color: rgb(95, 160, 78);
  `;

  const StyledFaReact = styled(FaReact)`
    color: rgb(20, 158, 202);
  `;

  return (
    <>
      <div className="content-carousel">
        <Splide
          aria-label="Projects"
          options={{
            type: 'loop',
            width: 500,
            height: 500,
            gap: "1rem"            
          }}
        >
          <SplideSlide>
            <img src={fotoCVA} alt="Image 1" />
            <h4>Centro de Voluntariado Alameda</h4>
            <p>
              um dashboard para visualização de informações, cadastro de
              usuários e controle administrativo, oferecendo uma plataforma
              eficiente para interação e gerenciamento de usuários.
            </p>
            <div className="text-icon-carousel">
              <span>Tecnologias:</span>
              <div className="icons-project-cv">
                <StyledFaNodeJs />
                <StyledFaReact />
                <FaFire/>
                {/* <img className="button-img" src={instFoto} alt="LinkedIn" /> */}
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src="https://fakeimg.pl/500x300" alt="Image 2" />
            <p>Coming Soon...</p>
          </SplideSlide>
          <SplideSlide>
            <img src="https://fakeimg.pl/500x300" alt="Image 2" />
            <p>Coming Soon...</p>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Carrousel;
