import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Confettii = () => {
  const { width, height } = useWindowSize();
  return <Confetti numberOfPieces={50} gravity={0.3} width={width} height={height} />;
};

export default Confettii;
