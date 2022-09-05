import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  background-image: linear-gradient(135deg, #243949 10%, #517fa4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  @media (max-width: 64em) {
    width: 40%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontxl};
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Title>Contact Me</Title>
      <BtnContainer>
        <Button text="My Bio" link="https://h3xxt.xyz" />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
