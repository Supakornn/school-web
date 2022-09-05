import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  background: linear-gradient(#414755, #6e6d69);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 70em) {
    .desktop {
      display: none;
    }
  }
  @media (max-width: 64em) {
    .desktop {
      display: none;
    }

    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) => (props.isclick ? "translateY(0)" : "translateY(-150%)")};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 2rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontlg};
  background-image: linear-gradient(60deg, #7dce13, #f2d388);
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #3d8361;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  } ;
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.isclick ? "2rem" : "1.5rem")};
  height: 2px;
  background: black;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.isclick ? "translateX(-50%) rotate(90deg)" : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::before,
  &::after {
    content: " ";
    width: ${(props) => (props.isclick ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.isclick ? "-2px" : "0")};
    background: black;
    position: absolute;
    bottom: ${(props) => (props.isclick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.isclick ? "rotate(40deg)" : "rotate(0)")};
  }

  &::before {
    content: " ";
    width: ${(props) => (props.isclick ? "1rem" : "1.5rem")};
    height: px;
    background: black;
    position: absolute;
    top: ${(props) => (props.isclick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.isclick ? "rotate(-40deg)" : "rotate(0)")};
  }
`;

const Nav = () => {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.querySelector(id);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    setClick(!click);
  };

  return (
    <Section id="nav">
      <NavBar>
        <Logo />
        <HamburgerMenu isclick={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu isclick={click}>
          <MenuItem onClick={() => scrollTo("#nav")}>หน้าแรก</MenuItem>
          <MenuItem onClick={() => scrollTo("#about")}>เกี่ยวกับโรงเรียน</MenuItem>
          <MenuItem onClick={() => scrollTo("#inside")}>ภายในโรงเรียน</MenuItem>
          <MenuItem onClick={() => scrollTo("#")}>ติดต่อโรงเรียน</MenuItem>
          <div className="mobile"></div>
        </Menu>
        <div className="desktop"></div>
      </NavBar>
    </Section>
  );
};

export default Nav;
