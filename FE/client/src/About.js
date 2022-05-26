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
      <AboutMeContainer></AboutMeContainer>
      <SkillsContainer></SkillsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 800px;
  background-color: #e8a995;
`;

const AboutMeContainer = styled.div``;

const SkillsContainer = styled.div``;

const Text = styled.p``;

export default About;
