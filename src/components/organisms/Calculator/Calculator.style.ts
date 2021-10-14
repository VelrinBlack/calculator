import styled from "styled-components";

const StyledWrapper = styled.main`
  width: 500px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 8px;
`;

export default StyledWrapper;
