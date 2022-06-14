import styled from "styled-components";
import { projects } from "./data";
// import Technologies from "./Technologies";

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
              <Technologies>Technologies Used: {p.technologies}</Technologies>
              <Link href={p.link}>
                Find the <b>code</b> here
              </Link>
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
  background-color: #c68688;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 10px;

  /* @media only screen and (min-width: 700px) {
    width: 100%;
  } */
`;

const Title = styled.h1`
  font-size: 32px;
  /* background-color: #cbdee9; */
  padding: 10px;
  margin-top: 70px;
  font-weight: bold;
  color: #ffe0cf;
`;

const ProjectsContainer = styled.div`
  /* background-color: white; */
  padding: 40px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 80px;
  row-gap: 60px;
  /* grid-template-columns: repeat(2); */
  /* gap: 10px; */
`;

const Project = styled.div``;

const ProjectContainer = styled.div`
  /* background-color: #e3efe2; */
  background-color: #cbdee9;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 28px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const Picture = styled.img`
  width: 100%;
  height: 60%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: none;
    filter: none;
  }
`;

const Description = styled.p`
  font-size: 22px;
  padding-top: 14px;
`;

const Technologies = styled.p`
  font-size: 18px;
  /* font-weight: bold; */
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
  margin-top: 20px;
  /* font-weight: bold; */
`;

// const Technology = styled.p``;

export default Portfolio;
