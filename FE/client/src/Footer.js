import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>Follow me</Text>
    </Container>
  );
};

const Container = styled.div`
  border-top: 4px solid black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 18px;
`;

export default Footer;
