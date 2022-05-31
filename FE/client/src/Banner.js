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
  /* background-color: #e3efe2; */
  background-color: #e8a995;
  height: 40px;
  padding-left: 30px;
  padding-top: 40px;
  padding-bottom: 20px;
  width: 100%;
`;

const Link = styled(NavLink)`
  font-family: "Barlow", sans-serif;
  text-decoration: none;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default Banner;
