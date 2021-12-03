import styled from "styled-components";

export const ButtonDarkStyled = styled.button`
  border: 2px solid red;
  color: #fff;
  background-color: black;
  font-size: 2rem;
  padding: ${({ size }) => {
    switch (size) {
      case "large":
        return "6rem";
      case "medium":
        return "4rem";
      case "small":
        return "2rem";
      default:
        return "1rem";
    }
  }};
`;
export const ButtonRedStyled = styled.button`
  border: 2px solid black;
  color: #fff;
  background-color: red;
  font-size: 2rem;
  padding: ${(props) => {
    switch (props.size) {
      case "large":
        return "6rem";
      case "medium":
        return "4rem";
      case "small":
        return "2rem";
      default:
        return "1rem";
    }
  }};
`;
export const ButtonBlueStyled = styled.button`
  border: 2px solid red;
  color: #fff;
  background-color: blue;
  font-size: 2rem;
  padding: ${(props) => {
    switch (props.size) {
      case "large":
        return "6rem";
      case "medium":
        return "4rem";
      case "small":
        return "2rem";
      default:
        return "1rem";
    }
  }};
`;

export const StyledList = styled.ul`
  list-style: square;
  background-color: violet;
  li {
    margin: 0 1rem;
    color: turquoise;
  }
`;
