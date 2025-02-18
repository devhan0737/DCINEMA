import "./assets/style/basic.css";
import Contents from "./components/Body/Contents";
import Test from "./components/Body/Contents";
import MainHeader from "./components/Header/MainHeader";
import styled from "styled-components";

function App() {
  return (
    <AllWrap>
      <MainHeader />
      <Contents />
    </AllWrap>
  );
}

export default App;

const AllWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
