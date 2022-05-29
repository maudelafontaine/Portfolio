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
`;

const Title = styled.h1`
  font-size: 24px;
  background-color: #e3efe2;
  padding: 10px;
  margin-top: 50px;
`;

const ProjectsContainer = styled.div`
  /* background-color: white; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Project = styled.div``;

const ProjectContainer = styled.div`
  background-color: #e3efe2;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const Picture = styled.img`
  width: 40%;
  height: 40%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: none;
    filter: none;
  }
`;

const Description = styled.p``;

const Text = styled.p``;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

// const Technology = styled.p``;

export default Portfolio;
