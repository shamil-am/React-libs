import React from "react";
import styled, { keyframes } from "styled-components";

const textAnime = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1;
    }
`;

const TextErrorDiv = styled.div`
  background-color: #F14A16;
  color: #F0ECE3;
  animation: ${textAnime};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  margin-top: .25rem;
  padding: .125rem;
`;

const TextError = ({ children }) => {
  return <TextErrorDiv>{children}</TextErrorDiv>;
};

export default TextError;
