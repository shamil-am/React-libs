import styled, { keyframes } from "styled-components";

const toDown = keyframes`
0%{
    top:0;
    color: red;
}
25%{
    top:25%;
    color: blue;
}
50%{
    top:50%;
    color: green;
}
75%{
    top:75%;
    color: yellow;
}100%{
    bottom:0;
    color: red;
}

`;

const AnimeDiv = styled.div`
  border: 2px solid purple;
  height: 20rem;
  width: 20rem;
  position: relative;
  background-color: #cecece;
  & .child {
    height: 5rem;
    width: 5rem;
    border: 1px solid black;
    position: absolute;
    animation: ${toDown};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
`;

const KeyframeStayled = ({ children }) => {
  return <AnimeDiv>{children}</AnimeDiv>;
};

export default KeyframeStayled;
