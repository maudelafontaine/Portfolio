import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/contact" style={{ paddingRight: "50px" }}>
        Contact
      </NavigationLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  /* background-color: #bbcbd2; */
  /* background-color: #fff8e7; */
  /* background-color: #e8a995; */
  background-color: #fff8e7;
  height: 50px;
  width: 100%;
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
    border-bottom: 2px solid #e8a995;
    color: #888;
    font-size: 25px;
    /* font-weight: bold; */
  }
`;

export default Header;
