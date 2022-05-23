import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Link to="/">Maude Lafontaine</Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ddfada;
  height: 40px;
  padding: 30px;
`;

const Link = styled(NavLink)`
  font-family: "Barlow", sans-serif;
  text-decoration: none;
  color: black;
  font-size: 26px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export default Banner;
