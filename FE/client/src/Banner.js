import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo src={"/images/portfolio_logo.png"} />
        </Link>
      </LogoContainer>
      <LinksContainer>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffe0cf;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  /* padding-top: 40px;  */
  /* padding-bottom: 20px; */
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
`;

const Link = styled(NavLink)`
  font-family: "Barlow", sans-serif;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 300px;
  border: 2px solid white;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  margin-bottom: 30px;
  /* border: 2px solid black; */
  height: 40px;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-right: 30px;
  padding-left: 30px;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #c68688;
    color: #888;
    font-size: 30px;
    /* font-weight: bold; */
  }
`;

export default Banner;
