import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  background-color: #bbcbd2;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  font-size: 23px;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;
