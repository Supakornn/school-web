import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import Typewriter from "typewriter-effect";
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(135deg, #616161 10%, #243949 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 85%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  width: 80%;
  margin: 0 auto;

  span {
    background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
  display: flex;
  @media (max-width: 64em) {
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span id="Title-1">About Me </span>`)
                  .pauseFor(200)
                  .deleteAll()
                  .start();
              }}
            />
          </Title>
          <SubText>
            My name is Supakorn Ieamgomol, Aka H3XxT, Nickname Gap, <br />
            I'm {new Date().getFullYear() - 2005} years old, From Thailand.
          </SubText>
          <SubTextLight>I'm Fullstack Developer, I have many passion about coding.</SubTextLight>
          <ButtonContainer>
            <Button text="Contact Me" link="https://www.h3xxt.xyz" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
