import React from "react";
import styled from "styled-components";
import CoverPic from "../CoverPic";

const Section = styled.section`
   width: 100vw;
   height: 100vh;
   position: relative;
   background-color: ${(props) => props.theme.body};
`;

const Home = () => {
   return (
      <Section id="home">
         <CoverPic />
      </Section>
   );
};

export default Home;
