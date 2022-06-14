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
          <AiFillGithub size={45} style={{ color: "#cbdee9" }} />
        </a>
        <a
          href={linkedIn}
          style={{ color: "black", textDecoration: "none", padding: "5px" }}
        >
          <AiFillLinkedin size={45} style={{ color: "#cbdee9" }} />
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
  /* background-color: #fff8e7; */
  background-color: #cbdee9;
  background-color: #ffe0cf;
  /* height: 20vh; */
  width: 100%;
  padding: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 30px;
`;

const Text = styled.p`
  font-size: 15px;
  padding: 5px;
  margin: 0px;
  color: black;
  /* margin-top: 20px; */
`;

export default Footer;
