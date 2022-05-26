import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </Wrapper>
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
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 30px;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px;
  font-size: 25px;

  &:hover {
    cursor: pointer;
    border-bottom: 4px solid #e8a995;
    color: #888;
    font-size: 25px;
    /* font-weight: bold; */
  }
`;

export default Header;
