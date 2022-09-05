import React from "react";
import main from "../assets/mainvideo/main.jpg";
import styled from "styled-components";

const PicContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } ;
`;

const CoverPic = () => {
  return (
    <PicContainer>
      <img src={main} alt="pic" srcset="" />
    </PicContainer>
  );
};

export default CoverPic;
