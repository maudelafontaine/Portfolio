import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const github = "https://github.com/maudelafontaine";
  const linkedIn = "https://www.linkedin.com/in/maudelafontaine/";
  return (
    <Container>
      <LinksContainer>
        <a
          href={github}
          style={{ color: "black", textDecoration: "none", padding: "5px" }}
        >
          <AiFillGithub size={34} style={{ color: "#888" }} />
        </a>
        <a
          href={linkedIn}
          style={{ color: "black", textDecoration: "none", padding: "5px" }}
        >
          <AiFillLinkedin size={34} style={{ color: "#888" }} />
        </a>
      </LinksContainer>
      <Text>Designed and Developed by Maude Lafontaine</Text>
      <Text style={{ marginBottom: "20px" }}>Copyright 2022</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 6px dotted #888;
  /* padding: 20px; */
  background-color: #fff8e7;
  height: 100%;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

export default Footer;
