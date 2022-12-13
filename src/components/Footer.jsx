import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Facebook from "../Icons/Facebook";

const Section = styled.section`
   min-height: 100vh;
   height: 100vh;
   width: 100vw;
   background-color: ${(props) => props.theme.body};
   position: relative;
   color: ${(props) => props.theme.text};

   display: flex;
   flex-direction: column;
`;
const Container = styled.div`
   width: 75%;
   margin: 2em auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid black;

   @media (max-width: 64em) {
      width: 90%;
   } ;
`;

const Left = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   @media (max-width: 64em) {
      width: 100%;
   } ;
`;

const IconList = styled.div`
   display: flex;
   align-items: center;
   margin: 1rem auto;

   & > * {
      padding-right: 0.5rem;
      transition: all 0.2s ease;
   }

   a:hover {
      transform: scale(1.2);
   }
`;
const MenuItem = styled.ul`
   list-style-type: none;
   width: 50%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-gap: 1rem;
   @media (max-width: 64em) {
      display: none;
   } ;
`;

const Item = styled.li`
   width: fit-content;
   cursor: pointer;

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
`;
const Buttom = styled.div`
   width: 75%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
      text-decoration: underline;
   }
   @media (max-width: 64em) {
      flex-direction: column;
      width: 100%;
      span {
         margin-bottom: 1rem;
      }
   } ;
`;
const Footer = () => {
   const scrollTo = (id) => {
      let element = document.getElementById(id);

      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
   };
   return (
      <Section id="footer">
         <Banner />
         <Container>
            <Left>
               <Logo />
               <IconList>
                  <a href="https://www.facebook.com/debsirinsch/" target="_blank" rel="noreferrer">
                     <Facebook />
                  </a>
               </IconList>
            </Left>
            <MenuItem>
               <Item onClick={() => scrollTo("nav")}>หน้าแรก</Item>
               <Item onClick={() => scrollTo("about")}>เกี่ยวกับโรงเรียน</Item>
               <Item onClick={() => scrollTo("inside")}>ภายในโรงเรียน</Item>
               <Item onClick={() => scrollTo("school")}>โรงเรียนในเครือ</Item>
            </MenuItem>
         </Container>
      </Section>
   );
};

export default Footer;
