import React from "react";
import StyledWrapper from "./Keyboard.style";

const Keyboard: React.FC = () => {
  return (
    <StyledWrapper>
      <button className="key">÷</button>
      <button className="key">×</button>
      <button className="key">-</button>
      <button className="key">+</button>
      <button className="key">7</button>
      <button className="key">8</button>
      <button className="key">9</button>
      <button className="key">C</button>
      <button className="key">4</button>
      <button className="key">5</button>
      <button className="key">6</button>
      <button className="key">1</button>
      <button className="key">2</button>
      <button className="key">3</button>
      <button className="key">=</button>
    </StyledWrapper>
  );
};

export default Keyboard;
