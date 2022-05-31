import styled from "styled-components";
import { projects } from "./data";

const Portfolio = () => {
  return (
    <Container>
      <Title>Here are some projects that I've built.</Title>
      <ProjectsContainer>
        {projects.map((p) => (
          <Project key={p.id}>
            <ProjectContainer>
              <Name>{p.name}</Name>
              <Picture src={p.picture} />
              <Description>{p.description}</Description>
              <Text>Technologies Used</Text>
              {/* {projects.technologies.map((t) => (
                <Technology key={t}>{t}</Technology>
              ))} */}
              <Link href={p.link}>Code</Link>
            </ProjectContainer>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e8a995;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const Title = styled.h1`
  font-size: 32px;
  background-color: #e3efe2;
  padding: 10px;
  margin-top: 50px;
  font-weight: bold;
`;

const ProjectsContainer = styled.div`
  background-color: white;
  padding: 40px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 50px;
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto auto;
  column-gap: 40px;
  row-gap: 60px;
  /* grid-template-columns: repeat(2); */
  /* gap: 10px; */
`;

const Project = styled.div``;

const ProjectContainer = styled.div`
  background-color: #e3efe2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 34px;
`;

const Picture = styled.img`
  width: 80%;
  height: 60%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: none;
    filter: none;
  }
`;

const Description = styled.p`
  font-size: 26px;
`;

const Text = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
  font-weight: bold;
`;

// const Technology = styled.p``;

export default Portfolio;
