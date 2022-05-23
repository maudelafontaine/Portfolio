import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>Designed and Developed by Maude Lafontaine</Text>
    </Container>
  );
};

const Container = styled.div`
  /* border-top: 2px solid black; */
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff8e7;
`;

const Text = styled.p`
  font-size: 18px;
`;

export default Footer;
