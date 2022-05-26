import styled from "styled-components";

import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";

const Homepage = () => {
  return (
    <Container>
      <Title>
        <b>Welcome</b>, I'm Maude Lafontaine
      </Title>
      <ContentContainer>
        <Text>I'm a full-stack web developer based in Canada.</Text>

        <IconsContainer>
          <RiComputerLine
            size={38}
            style={{ color: "#fff8e7", padding: "5px" }}
          />
          <MdOutlineComputer
            size={40}
            style={{ color: "#fff8e7", padding: "5px" }}
          />
        </IconsContainer>
      </ContentContainer>
      <Picture src="/images/code.jpg" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #e8a995;
  height: 100%auto;
  /* border-top: 2px solid black; */
  padding-top: 100px;
  padding-bottom: 50px;
`;

const Title = styled.h1``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  margin-bottom: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 20px;
`;

const Picture = styled.img`
  width: 40%;
  height: 50%;
  border-radius: 5px;
  padding-bottom: 40px;
`;

export default Homepage;
