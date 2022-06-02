import styled from "styled-components";

import { RiComputerLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";

const Homepage = () => {
  return (
    <Container>
      <ContentContainer>
        {/* <IconsContainer>
          <RiComputerLine
            size={38}
            style={{ color: "#fff8e7", padding: "5px" }}
          />
          <MdOutlineComputer
            size={40}
            style={{ color: "#fff8e7", padding: "5px" }}
          />
        </IconsContainer> */}
        <Picture src="/images/code.jpg" />
      </ContentContainer>
      <Wrapper>
        <Title>
          <b style={{ color: "#ffe0cf" }}>Welcome</b>, I'm Maude Lafontaine
        </Title>
        <Text>I'm a Full-Stack Web Developer based in Canada.</Text>
        <Dev_Picture src={"/images/Dev_logo.png"} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e8a995;
  background-color: #c68688;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  margin-bottom: 20px;
  margin-top: 20px;
  width: 50%;
`;

const Picture = styled.img`
  width: 70%;
  /* height: 50%; */
  border-radius: 2px;
  /* padding-bottom: 40px; */
  border: 10px solid #ffe0cf;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 2px solid black; */
  width: 600px;
  margin-right: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const Text = styled.p`
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
`;

const Dev_Picture = styled.img`
  /* border-radius: 50%; */
  margin-top: 30px;
  width: 300px;
  height: 220px;
  border-radius: 2px;
  border: 4px solid #ffe0cf;
`;
// const IconsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding-top: 15px;
// `;
export default Homepage;
