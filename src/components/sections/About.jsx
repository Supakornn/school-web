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
    background-image: linear-gradient(135deg, #7dce13, 10%, #f2d388 100%) a;
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
  width: 100%;
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
                  .typeString(`<span id="Title-1">เกี่ยวกับโรงเรียน</span>`)
                  .pauseFor(200)
                  .deleteAll()
                  .start();
              }}
            />
          </Title>
          <SubText>โรงเรียนเทพศิรินทร์</SubText>
          <SubTextLight>
            (อังกฤษ: Debsirin School, ย่อ: ท.ศ., DS) เป็นโรงเรียนชายล้วน
            อยู่ภายใต้สังกัดสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน กระทรวงศึกษาธิการ
            เป็นโรงเรียนประจำ วัดเทพศิรินทราวาสราชวรวิหาร ก่อตั้งขึ้นใน 15 มีนาคม พ.ศ. 2428
            ตามพระราชดำริของพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว ปัจจุบันตั้งอยู่เลขที่ 1466
            ถนนกรุงเกษม แขวงวัดเทพศิรินทร์ เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร
            โรงเรียนเทพศิรินทร์เป็นโรงเรียนรัฐบาลแห่งเดียวในประเทศไทย
            ที่มีพระมหากษัตริย์ทรงเข้ารับการศึกษา คือ พระบาทสมเด็จพระปรเมนทรมหาอานันทมหิดล
            พระอัฐมรามาธิบดินทร รัชกาลที่ 8
            นอกจากนี้ยังมีนักเรียนเก่าที่ดำรงตำแหน่งสำคัญทางการเมืองมากมาย อาทิ นายกรัฐมนตรีไทย 4 คน
            รวมถึง นายกรัฐมนตรีคนแรกแห่งมาเลเซีย ปัจจุบันโรงเรียนเทพศิรินทร์มีอายุ 137 ปี
            นอกจากนี้โรงเรียนเทพศิรินทร์ยังประกอบด้วย โรงเรียนเครือข่ายที่มีคำนำหน้าว่า
            "เทพศิรินทร์" อีก 10 แห่ง โรงเรียนเทพศิรินทร์เป็นโรงเรียนในกลุ่มจตุรมิตร
            ร่วมกับโรงเรียนสวนกุหลาบวิทยาลัย โรงเรียนอัสสัมชัญ และโรงเรียนกรุงเทพคริสเตียนวิทยาลัย
          </SubTextLight>
          <ButtonContainer>
            <Button
              text="ข้อมูลเพิ่มเติม"
              link="https://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8Chttps://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C"
            />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
