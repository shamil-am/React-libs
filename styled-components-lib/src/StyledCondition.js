import React from "react";
import styled from "styled-components";

const StateCondition = styled.div`
border: 2px solid black;
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: ${(props) => {
    if (props.justifyContent === "start") {
      return "flex-start";
    } else if (props.justifyContent === "end") {
      return "flex-end";
    } else {
      return "space-between";
    }
  }};
`;

const StyledCondition = ({ children, justifyContent }) => {
  return (
    <StateCondition justifyContent={justifyContent}>{children}</StateCondition>
  );
};

export default StyledCondition;
