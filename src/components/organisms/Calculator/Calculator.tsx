import React from "react";
import StyledWrapper from "./Calculator.style";
import Result from "components/molecules/Result/Result";
import Keyboard from "components/molecules/Keyboard/Keyboard";

const Calculator: React.FC = () => {
  return (
    <StyledWrapper>
      <Result />
      <Keyboard />
    </StyledWrapper>
  );
};

export default Calculator;
