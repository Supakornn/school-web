import React from "react";
import styled from "styled-components";
import s1 from "../../assets/allschool/s1.jpg";
import s2 from "../../assets/allschool/s2.jpg";
import s3 from "../../assets/allschool/s3.jpg";
import s4 from "../../assets/allschool/s4.jpg";
import s5 from "../../assets/allschool/s5.jpg";
import s6 from "../../assets/allschool/s6.jpg";
import s7 from "../../assets/allschool/s7.jpg";
import s8 from "../../assets/allschool/s8.jpg";
import s9 from "../../assets/allschool/s9.jpg";
// import Confetti from "../Confetti";
import Button from "../Button";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  background-image: linear-gradient(135deg, #7dce13, 10%, #f2d388 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #5bb318;
  width: fit-content;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  cursor: pointer;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  z-index: 5;

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.body};
  border-radius: 5px;
  margin-top: 15px;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
  }
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6a88;
  margin-top: 0.5rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`;

const ProjectComponent = ({ img, name = "", subtitle = "", link = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Subtitle>{subtitle}</Subtitle>
      <ButtonContainer>
        <Button text="เว็ปโรงเรียน" link={link} />
      </ButtonContainer>
    </Item>
  );
};

const School = () => {
  return (
    <Section id="school">
      {/* <Confetti /> */}
      <Title>โรงเรียนในเครือ</Title>
      <Container>
        <ProjectComponent
          name="เทพศิรินทร์ร่มเกล้า"
          subtitle="กรุงเทพมหานคร"
          link="https://dsr.ac.th/"
          img={s1}
        />
        <ProjectComponent
          name="เทพศิรินทร์คลองสิบสาม"
          subtitle="ปทุมธานี"
          link="http://www.dsp.ac.th/"
          img={s2}
        />
        <ProjectComponent
          name="เทพศิรินทร์นนทบุรี"
          subtitle="นนทบุรี"
          link="https://www.tsn.ac.th/web/"
          img={s3}
        />
        <ProjectComponent
          name="เทพศิรินทร์พุแค"
          subtitle="สระบุรี"
          link="http://www.debsirinphukhae.ac.th/"
          img={s4}
        />
        <ProjectComponent
          name="เทพศิรินทร์ลาดหญ้า"
          subtitle="กาญจนบุรี"
          link="http://www.dsl.ac.th/"
          img={s5}
        />
        <ProjectComponent
          name="เทพศิรินทร์ขอนแก่น"
          subtitle="ขอนแก่น"
          link="https://dskk.ac.th/"
          img={s6}
        />
        <ProjectComponent
          name="เทพศิรินทร์เชียงใหม่"
          subtitle="เชียงใหม่"
          link="http://www.dsc.ac.th/"
          img={s7}
        />
        <ProjectComponent
          name="เทพศิรินทร์๙"
          subtitle="เชียงใหม่"
          link="https://www.debsrin9.blogspot.com/"
          img={s8}
        />
        <ProjectComponent
          name="เทพศิรินทร์สมุทรปราการ"
          subtitle="สมุทรปราการ"
          link="http://www.debsirinsp.ac.th/"
          img={s9}
        />
      </Container>
    </Section>
  );
};

export default School;
