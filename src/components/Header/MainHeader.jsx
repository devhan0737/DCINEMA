import styled from "styled-components";
import { theme } from "../../assets/theme";

const MainHeader = () => {
  return (
    <Container>
      <MainLogo>
        <a href="#">
          <img src={theme.image.mainLogo} alt="" />
        </a>
      </MainLogo>
      <User>
        <a href="#">
          <img src={theme.image.userIconWhite} alt="User Icon" />
        </a>
      </User>
    </Container>
  );
};

export default MainHeader;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #333333;
`;
const MainLogo = styled.h1`
  display: flex;
  align-items: center;
  object-fit: contain;
  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 20px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  svg {
    fill: white;
  }
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;
