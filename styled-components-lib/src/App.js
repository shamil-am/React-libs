import styled from "styled-components";
import InheritedButton from "./InheritedButton";
import StyledButton from "./StyledButton";

///
const Header = styled.div`
  max-width: 100%;
  background-color: teal;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Main = styled.div`
  max-width: 100%;
  background-color: #cecece;
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
      </Main>
    </>
  );
}

export default App;
