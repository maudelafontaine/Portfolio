import styled from "styled-components";

import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const linkedIn = "https://www.linkedin.com/in/maudelafontaine/";
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
            borderBottom: "4px solid #c68688",
            paddingBottom: "4px",
            color: "#c68688",
            fontWeight: "bold",
            fontSize: "25px",
            // fontWeight: "bold",
          }}
        >
          Here's my contact information
        </Text>
        <ContactsContainer>
          <InfoContainer>
            <AiFillLinkedin size={32} style={{ color: "#c68688" }} />
            <Link href={linkedIn}>
              <b style={{ fontSize: "22px" }}>/MaudeLafontaine</b>
            </Link>
          </InfoContainer>
          <InfoContainer>
            <AiOutlineMail size={32} style={{ color: "#c68688" }} />
            <Info>
              <b style={{ fontSize: "22px" }}>maudelafontaine1313@gmail.com</b>
            </Info>
          </InfoContainer>
        </ContactsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #e8a995; */
  background-color: #c68688;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;

  padding: 20px;
`;

const Title = styled.b`
  font-size: 32px;
  /* margin-top: 40px; */
  margin-bottom: 20px;
  color: #888;
  color: #ffe0cf;
`;

const Text = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  border: 6px solid #ffe0cf;
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
  background-color: white;
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
