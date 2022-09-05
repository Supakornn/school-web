import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../../assets/certpic/c1.png";
import img2 from "../../assets/certpic/c2.png";
import img3 from "../../assets/certpic/c3.png";
import img4 from "../../assets/certpic/c4.png";
import img5 from "../../assets/certpic/c5.png";
import img6 from "../../assets/certpic/c6.png";
import img7 from "../../assets/certpic/c7.png";
import img8 from "../../assets/certpic/c8.png";
import img9 from "../../assets/certpic/c9.png";
import img10 from "../../assets/certpic/c10.png";
import img11 from "../../assets/certpic/c11.png";
import img12 from "../../assets/certpic/c12.png";
import img13 from "../../assets/certpic/c13.png";
import img14 from "../../assets/certpic/c14.png";
import img15 from "../../assets/certpic/c15.png";
import img16 from "../../assets/certpic/c16.png";
import img17 from "../../assets/certpic/c17.png";
import img18 from "../../assets/certpic/c18.png";
import img19 from "../../assets/certpic/c19.png";
import img20 from "../../assets/certpic/c20.png";
import img21 from "../../assets/certpic/c21.png";
import img22 from "../../assets/certpic/c22.png";
import img23 from "../../assets/certpic/c23.png";
import img24 from "../../assets/certpic/c24.png";
import img25 from "../../assets/certpic/c25.png";
import img26 from "../../assets/certpic/c26.png";
import img27 from "../../assets/certpic/c27.png";
import img28 from "../../assets/certpic/c28.png";
import img29 from "../../assets/certpic/c29.png";
import img30 from "../../assets/certpic/c30.png";
import img31 from "../../assets/certpic/c31.png";
import img32 from "../../assets/certpic/c32.png";
import img33 from "../../assets/certpic/c33.png";
import img34 from "../../assets/certpic/c34.png";
import img35 from "../../assets/certpic/c35.png";
import img36 from "../../assets/certpic/c36.png";
import img37 from "../../assets/certpic/c37.png";
import img38 from "../../assets/certpic/c38.png";
import img39 from "../../assets/certpic/c39.png";
import img40 from "../../assets/certpic/c40.png";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(135deg, #cbbacc 10%, #2580b3 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > *:nth-of-type(2n + 1) {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:nth-of-type(2n) {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2em 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 10rem;
  margin: 0 1rem;
  background-color: ${(props) => props.body};
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const CertItem = ({ img, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImageContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="TTT" />
    </ImageContainer>
  );
};
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  background-image: linear-gradient(135deg, #F6D242 10%, #FF52E5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #f6416c;
  width: fit-content;
`;
const Certificates = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  const Row3Ref = useRef(null);
  const Row4Ref = useRef(null);
  return (
    <Section id="certificates">
      <Title>Certificates</Title>
      <Row direction="none" ref={Row1Ref}>
        <CertItem img={img1} passRef={Row1Ref} />
        <CertItem img={img2} passRef={Row1Ref} />
        <CertItem img={img3} passRef={Row1Ref} />
        <CertItem img={img4} passRef={Row1Ref} />
        <CertItem img={img5} passRef={Row1Ref} />
        <CertItem img={img6} passRef={Row1Ref} />
        <CertItem img={img7} passRef={Row1Ref} />
        <CertItem img={img8} passRef={Row1Ref} />
        <CertItem img={img9} passRef={Row1Ref} />
        <CertItem img={img10} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <CertItem img={img11} passRef={Row2Ref} />
        <CertItem img={img12} passRef={Row2Ref} />
        <CertItem img={img13} passRef={Row2Ref} />
        <CertItem img={img14} passRef={Row2Ref} />
        <CertItem img={img15} passRef={Row2Ref} />
        <CertItem img={img16} passRef={Row2Ref} />
        <CertItem img={img17} passRef={Row2Ref} />
        <CertItem img={img18} passRef={Row2Ref} />
        <CertItem img={img19} passRef={Row2Ref} />
        <CertItem img={img20} passRef={Row2Ref} />
      </Row>
      <Row direction="none" ref={Row3Ref}>
        <CertItem img={img21} passRef={Row3Ref} />
        <CertItem img={img22} passRef={Row3Ref} />
        <CertItem img={img23} passRef={Row3Ref} />
        <CertItem img={img24} passRef={Row3Ref} />
        <CertItem img={img25} passRef={Row3Ref} />
        <CertItem img={img26} passRef={Row3Ref} />
        <CertItem img={img27} passRef={Row3Ref} />
        <CertItem img={img28} passRef={Row3Ref} />
        <CertItem img={img29} passRef={Row3Ref} />
        <CertItem img={img30} passRef={Row3Ref} />
      </Row>
      <Row direction="reverse" ref={Row4Ref}>
        <CertItem img={img31} passRef={Row4Ref} />
        <CertItem img={img32} passRef={Row4Ref} />
        <CertItem img={img33} passRef={Row4Ref} />
        <CertItem img={img34} passRef={Row4Ref} />
        <CertItem img={img35} passRef={Row4Ref} />
        <CertItem img={img36} passRef={Row4Ref} />
        <CertItem img={img37} passRef={Row4Ref} />
        <CertItem img={img38} passRef={Row4Ref} />
        <CertItem img={img39} passRef={Row4Ref} />
        <CertItem img={img40} passRef={Row4Ref} />
      </Row>
    </Section>
  );
};

export default Certificates;
