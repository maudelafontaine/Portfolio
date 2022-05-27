import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const github = "https://github.com/maudelafontaine";
  const linkedIn = "https://www.linkedin.com/in/maude-lafontaine-271230217/";
  return (
    <Container>
      <LinksContainer>
        <a
          href={github}
          style={{ color: "black", textDecoration: "none", padding: "5px" }}
        >
          <AiFillGithub size={35} style={{ color: "#888" }} />
        </a>
        <a
          href={linkedIn}
          style={{ color: "black", textDecoration: "none", padding: "5px" }}
        >
          <AiFillLinkedin size={35} style={{ color: "#888" }} />
        </a>
      </LinksContainer>
      <TextContainer>
        <Text>Designed and Developed by Maude Lafontaine</Text>
        <Text>Copyright 2022</Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  border-top: 6px dotted #888;
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

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.p`
  font-size: 15px;
  padding: 5px;
  margin: 0px;
  color: black;
  /* margin-top: 20px; */
`;

export default Footer;
