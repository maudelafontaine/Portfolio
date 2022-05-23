import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  background-color: black;
`;

const NavigationLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;
