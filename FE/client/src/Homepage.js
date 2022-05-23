import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <Title>Full-stack web developer</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* height: 800px; */
  background-color: #e8a995;
  height: 800px;
`;

const Title = styled.h1``;

export default Homepage;
