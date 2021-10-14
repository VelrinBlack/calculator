import styled from "styled-components";

const StyledWrapper = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;

  margin: 10px;

  .key {
    background-color: transparent;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    font-size: 30px;

    transition: background-color 0.1s;

    &:hover {
      background-color: #e5e5e5;
    }

    &:last-child {
      grid-row: 3 / 5;
      grid-column: 4 / 5;

      background-color: #0069c0;
      border: none;
      color: #fff;

      &:hover {
        background-color: #005da8;
      }
    }
  }
`;

export default StyledWrapper;
