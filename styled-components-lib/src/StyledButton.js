import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  color: ${(props) => (props.color === "light" ? "black" : "white")};
  background-color: ${(props) =>
    props.color === "light"
      ? "white"
      : props.color === "dark"
      ? "black"
      : props.color === "blue"
      ? "blue"
      : null};
`;

const StyledButton = ({ type, children }) => {
  return <ButtonStyled color={type}>{children}</ButtonStyled>;
};

export default StyledButton;
