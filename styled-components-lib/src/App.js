import styled from "styled-components";
import {
  ButtonBlueStyled,
  ButtonDarkStyled,
  ButtonRedStyled,
  StyledList,
} from "./AllStyled";
import InheritedButton from "./InheritedButton";
import KeyframeStayled from "./KeyframeStayled";
import StyledButton from "./StyledButton";
import StyledCondition from "./StyledCondition";

///
const Header = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  color: ${props=> props.theme.colors.textMain};
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Main = styled.div`
  max-width: 100%;
  background-color: ${props=> props.theme.colors.secondBg};
  height: 80vh;
  @media (min-width: 768px) {
    max-width: 740px;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    margin: 0 auto;
  }
`;
const IconStyled = styled.div`
  background-color: tomato;
  @media (min-width: 768px) {
    flex-basis: 20%;
  }
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;
const NavStyled = styled.div`
  background-color: green;
  & ul {
    list-style: none;
    li {
      background-color: pink;
      margin: 0.5rem 0;
    }
  }
  @media (min-width: 768px) {
    flex-basis: 80%;
    & > ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        background-color: yellow;
      }
    }
  }
  @media (min-width: 992px) {
    flex-basis: 6 0%;
  }
`;
const Link = styled.a.attrs(() => ({
  target: "_blank",
}))`
  color: violet;
  text-decoration: none;
  font-size: 1.5rem;
`;
function App() {
  return (
    <>
      <Header>
        <IconStyled>
          <h1>Icon</h1>
        </IconStyled>
        <NavStyled>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </NavStyled>
      </Header>
      <Main>
        <StyledButton type="light">light Button</StyledButton>
        <StyledButton type="dark"> dark Button</StyledButton>
        <StyledButton type="blue">blue Button</StyledButton>
        <br />
        <InheritedButton>Inherited button</InheritedButton>
        <StyledCondition justifyContent="center">
          <div style={{ border: "1px solid red" }}>1</div>
          <div style={{ border: "1px solid red" }}>2</div>
          <div style={{ border: "1px solid red" }}>3</div>
        </StyledCondition>
        <KeyframeStayled>
          <div className="child">child</div>
        </KeyframeStayled>
        <Link href="http://google.com">go to new page</Link>
        <ButtonDarkStyled size="small">Button dark</ButtonDarkStyled>
        <ButtonBlueStyled size="medium">Button blue</ButtonBlueStyled>
        <ButtonRedStyled size="small">Button red</ButtonRedStyled>
        <StyledList>
          <li>Home</li>
          <li>About</li>
          <li>Navigation</li>
          <li>Contact</li>
        </StyledList>
      </Main>
    </>
  );
}

export default App;
