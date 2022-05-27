import styled from "styled-components";

import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const linkedIn = "https://www.linkedin.com/in/maude-lafontaine-271230217/";
  return (
    <Container>
      <Title>Let's collaborate </Title>
      <Text>
        If you're interested in working together or have any questions, you're
        welcome to get in touch with me.{" "}
      </Text>
      <Wrapper>
        <Text
          style={{
            marginBottom: "5px",
            borderBottom: "4px solid #fff8e7",
            paddingBottom: "4px",
            color: "#fff8e7",
            fontWeight: "bold",
            fontSize: "22px",
            // fontWeight: "bold",
          }}
        >
          Here's my contact information
        </Text>
        <ContactsContainer>
          <InfoContainer>
            <AiFillLinkedin size={30} style={{ color: "#fff8e7" }} />
            <Link href={linkedIn}>
              <b>/MaudeLafontaine</b>
            </Link>
          </InfoContainer>
          <InfoContainer>
            <AiOutlineMail size={30} style={{ color: "#fff8e7" }} />
            <Info>
              <b>maudelafontaine1313@gmail.com</b>
            </Info>
          </InfoContainer>
        </ContactsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e8a995;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding: 20px;
`;

const Title = styled.b`
  font-size: 32px;
  /* margin-top: 40px; */
  margin-bottom: 20px;
  color: #888;
`;

const Text = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  border: 4px solid #fff8e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 70px;
  padding-left: 70px;
  border-radius: 8px;
  background-color: #888;
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  margin-top: 20px;
  /* border: 2px solid black; */
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  /* border: 2px solid black; */
`;

const Link = styled.a`
  font-size: 18px;
  padding: 10px;
  color: black;
  text-decoration: none;
`;

const Info = styled.p`
  font-size: 18px;
  padding: 10px;
  margin: 0px;
`;

export default Contact;
