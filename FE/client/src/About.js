import styled from "styled-components";

/* To add
about me 
skills
languages
what i'm learning
*/
const About = () => {
  return (
    <Container>
      <AboutMeContainer>
        <Title>About Me</Title>
        <Text>
          I'm a <b>full-stack web developer</b>. I've recently graduated from
          Concordia Web Development Bootcamp in Montreal. My interest towards
          web development started in 2021.
        </Text>
        <Text>I'm currently looking for new work opportunities.</Text>
        {/* <Title>What Next</Title> */}
      </AboutMeContainer>
      <SkillsContainer>
        <Title>Technologies Used</Title>
        {/* <Text>Here's a list of the technologies I'm currently using.</Text> */}
        <ListContainer>
          <ul>
            <b style={{ fontSize: "20px" }}>Technical</b>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
          <ul>
            <b style={{ fontSize: "20px", marginBottom: "10px" }}>
              Applications
            </b>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Git</li>
            <li>MongoDB</li>
          </ul>
        </ListContainer>
      </SkillsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 1000px;
  background-color: #e8a995;
  padding: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Text = styled.p`
  font-size: 20px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

export default About;
