import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Title = styled.h2`
  font-size: 5rem;
  width: 100%;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "mansalva", cursive;
    color: #2b7a0b;
  }

  #text-1 {
    background-image: linear-gradient(60deg, #3ccf4e, #fff80a);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  } ;
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span id='text-1'>โรงเรียนเทพศิรินทร์<span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
    </>
  );
};

export default TypeWriterText;
