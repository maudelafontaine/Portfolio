import styled from "styled-components";

const Portfolio = () => {
  return (
    <Container>
      <Title>Here are some projects that I've built.</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 800px;
  background-color: #e8a995;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Title = styled.h1`
  font-size: 24px;
`;

export default Portfolio;
