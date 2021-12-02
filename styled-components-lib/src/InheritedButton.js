import React from "react";
import styled from "styled-components";
//material-ui dan goturduyumuz bir buttonu inherit edib elave style vere veya overwrite ede bilerik
const SuperButton = styled.button`
  background-color: teal;
  color: red;
`;

const ColoredButton = styled(SuperButton)`
  height: 5rem;
  width: 5rem;
  border: 1px solid red;
`;
const InheritedButton = ({ children }) => {
  return <ColoredButton>{children}</ColoredButton>;
};

export default InheritedButton;
