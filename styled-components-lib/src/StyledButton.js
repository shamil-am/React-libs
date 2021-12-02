import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  color: ${(props) => (props.type === "light" ? "black" : "white")};
  background-color: ${(props) =>
    props.type === "light"
      ? "white"
      : props.type === "dark"
      ? "black"
      : props.type === "blue"
      ? "blue"
      : null};
`;

const StyledButton = ({ type, children }) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>;
};

export default StyledButton;
