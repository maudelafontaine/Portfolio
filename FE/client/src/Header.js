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
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #bbcbd2;
  height: 80px;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px;
  font-size: 23px;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
`;

export default Header;
