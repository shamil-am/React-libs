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
  background-color: #f14a16;
  color: #f0ece3;
  animation: ${textAnime};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  margin-top: 0.25rem;
  padding: 0.25rem;
  position: absolute;
  bottom: -2rem;
`;
const TextError = ({ children }) => {
  return <TextErrorDiv className="error">{children}</TextErrorDiv>;
};

export default TextError;
