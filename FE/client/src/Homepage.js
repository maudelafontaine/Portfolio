import styled from "styled-components";
// import code from "../public/images/code";

const Homepage = () => {
  return (
    <Container>
      <Title>
        <b>Welcome</b>, I'm Maude Lafontaine
      </Title>
      <Text>I'm a web developer and enthusiastic learner based in Canada.</Text>
      <Text></Text>
      <Picture src="/images/code.jpg" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* height: 800px; */
  background-color: #e8a995;
  height: 800px;
`;

const Title = styled.h1``;

const Text = styled.p`
  font-size: 20px;
`;

const Picture = styled.img`
  width: 40%;
  height: 50%;
  border-radius: 5px;
`;

export default Homepage;
