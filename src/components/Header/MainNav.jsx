import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const MainNav = () => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <a href="#">전체</a>
            <a href="#">장르</a>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default MainNav;
