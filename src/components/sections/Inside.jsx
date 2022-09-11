import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "../../assets/tower/t1.png";
import t2 from "../../assets/tower/t2.png";
import t3 from "../../assets/tower/t3.png";
import t4 from "../../assets/tower/t4.png";
import t5 from "../../assets/tower/t5.png";
import t6 from "../../assets/tower/t6.png";

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
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid #f5af19;
  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.div`
  height: fit-content;
  background-image: linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%);
  color: black;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .title {
    display: block !important;
    margin-right: 85px;
  }

  img {
    width: 150px;
    height: 100px;
    margin: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const AwardItem = ({ title, subtext, img, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <img src={img} alt="pic" />
          <SubTitle className="title">{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  color: #5bb318;
  margin: 0 20px;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 20px;
  span {
    font-size: 1.5rem;
    background-image: linear-gradient(135deg, #009ffd 10%, #2a2a72 100%);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Inside = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0"
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top centert+=200px",
            end: "bottom center",
            scrub: true
          }
        }
      );
    });
    return () => {};
  }, []);

  return (
    <Section id="inside">
      <Title>ภายในโรงเรียน</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <AwardItem
            addToRef={addToRefs}
            title="ตึกเยาวมาลย์"
            subtext="ตึกเรียนมัธยมต้น(ม.1-2)และข้างล่างเป็นโรงอาหาร"
            img={t1}
          />
          <AwardItem
            addToRef={addToRefs}
            title="ตึกเทิดพระเกียรติ"
            subtext="อาคารสำหรับจัดกิจกรรมพิธีของแต่ระดับชั้นและ ชั้นล่างเป็นห้องอาหารติดแอร์"
            img={t2}
          />
          <AwardItem
            addToRef={addToRefs}
            title="ตึกนิภานพดล"
            subtext="ตึกเรียนมัธยมต้น(ม.3)"
            img={t3}
          />
          <AwardItem
            addToRef={addToRefs}
            title="ตึกแม้นศึกษาสถาน"
            subtext="ตึกเรียนมัธยมปลาย(ม.6)"
            img={t4}
          />
          <AwardItem
            addToRef={addToRefs}
            title="ตึกภาณุรังสี"
            subtext="ตึกเรียนมัธยมปลาย(ม.4-5)"
            img={t5}
          />
          <AwardItem
            addToRef={addToRefs}
            title="ตึกโชฏึกเลาหะเศรษฐี"
            subtext="พิพิธภัณฑ์"
            img={t6}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Inside;
