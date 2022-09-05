import React from "react";
import main from "../assets/mainvideo/main.jpg";
import styled from "styled-components";

const PicContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } ;
`;

const CoverPic = () => {
  return (
    <PicContainer>
      <img src={main} alt="pic" />
    </PicContainer>
  );
};

export default CoverPic;
