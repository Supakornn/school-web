import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/mainvideo/logo.png";

const LogoContainer = styled.div`
  display: flex;
  img {
    width: 60px;
    height: 60px;
  }
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: cursive;
  background-image: linear-gradient(60deg, #7dce13, #f2d388);
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  margin-left: 10px;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = () => {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setClick(!click);
  };
  return (
    <LogoContainer>
      <img src={logo} alt="logo" srcset="" />
      <LogoText>
        <p onClick={() => scrollTo("nav")}>Debsirin</p>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
