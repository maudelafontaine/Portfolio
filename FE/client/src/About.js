import styled from "styled-components";

import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiInsomnia } from "react-icons/si";
import { HiOutlineDesktopComputer } from "react-icons/hi";

/* To add
about me 
languages
what i'm learning
*/
const About = () => {
  return (
    <Container>
      <AboutMeContainer>
        <Title>About Me</Title>
        <TextContainer>
          <Text>
            I'm a <b>Full-Stack Developer</b>. I've recently graduated from
            Concordia Web Development Bootcamp in Montreal. I've learned
            different frontend and backend programming languages and how to use
            them to accomplish a variety of tasks. I'm now able to create,
            manipulate and style full-stack web applications by using these
            powerful tools.
          </Text>
          <Text>
            My interest towards web development started in 2021. I wanted to
            learn how to create web applications because I was fascinated by all
            the functionnalities offered by the web. I wanted to know more about
            how the web applications that I use everyday work as a developer
            perspective instead of only a user viewpoint.
          </Text>
          <Text>
            I'm currently looking for new opportunities and look forward to work
            on applications for the web.{" "}
          </Text>
          <HiOutlineDesktopComputer
            size={45}
            style={{
              paddingBottom: "25px",
              paddingTop: "20px",
              color: "#cbdee9",
            }}
          />
        </TextContainer>
      </AboutMeContainer>
      <SkillsContainer>
        <Title>Technologies I'm Currently Using</Title>
        {/* <Text>Here's a list of the technologies I'm currently using.</Text> */}
        <Wrapper>
          <ListContainer>
            <Type>Technical</Type>
            <List>
              <Item>
                <AiOutlineHtml5 size={22} style={{ paddingRight: "5px" }} />
                HTML
              </Item>
              <Item>
                <SiCss3 size={22} style={{ paddingRight: "5px" }} />
                CSS
              </Item>
              <Item>
                <IoLogoJavascript size={22} style={{ paddingRight: "5px" }} />
                JavaScript
              </Item>
              <Item>
                <FaReact size={22} style={{ paddingRight: "5px" }} />
                React
              </Item>
              <Item>
                <IoLogoNodejs size={22} style={{ paddingRight: "5px" }} />
                NodeJS
              </Item>
              <Item>Express</Item>
            </List>
          </ListContainer>
          <ListContainer>
            <Type>Applications</Type>
            <List>
              <Item>
                <AiFillGithub size={22} style={{ paddingRight: "5px" }} />
                GitHub
              </Item>
              <Item>VS Code</Item>
              <Item>
                <FaGitAlt size={22} style={{ paddingRight: "5px" }} />
                Git
              </Item>
              <Item>
                <DiMongodb size={22} style={{ paddingRight: "5px" }} />
                MongoDB
              </Item>
              <Item>
                <SiInsomnia size={22} style={{ paddingRight: "5px" }} />
                Insomnia
              </Item>
            </List>
          </ListContainer>
        </Wrapper>
      </SkillsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c68688;
  height: 100%;
  width: 100%;
  padding: 10px;
  /* justify-content: center; */
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  color: #888;
  /* border-bottom: 4px solid #fff8e7; */
  color: #ffe0cf;
  padding-bottom: 20px;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  /* padding: 20px; */
  width: 800px;
  /* background-color: white; */
  /* border: 2px solid black; */
  /* background-color: #fff8e7; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 30px;
  background-color: #ffe0cf;
  width: 800px;
`;

const Text = styled.p`
  font-size: 22px;
  padding: 10px;
  margin: 5px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  /* width: 100%; */
  margin-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: #cbdee9; */
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 5px solid #ffe0cf;
  background-color: #cbdee9;
  height: 350px;
  width: 400px;
`;

const List = styled.ul`
  /* padding: 10px; */
`;

const Type = styled.h2`
  color: #c68688;
  /* border-bottom: 3px solid #fff8e7; */
  font-size: 26px;
  padding: 0px;
  margin-top: 30px;
  font-weight: bold;
`;

const Item = styled.li`
  padding: 6px;
  font-size: 22px;
  color: black;
`;

export default About;
