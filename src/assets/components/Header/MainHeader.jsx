import styled from "styled-components";
import { theme } from "../../theme";
import MainNav from "./MainNav";

const MainHeader = () => {
  return (
    <Container>
      <MainLogo>
        <a href="#">Free Movie</a>
      </MainLogo>
      <MainNav />
      <User>
        <a href="#">
          <img src={theme.image.userIcon} alt="User Icon" />
        </a>
      </User>
    </Container>
  );
};

export default MainHeader;

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #ccc;
`;
const MainLogo = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;
