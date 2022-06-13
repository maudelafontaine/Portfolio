import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Banner from "./Banner";
// import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Footer from "./Footer";
import About from "./About";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Banner />
        {/* <Header /> */}
        <Main>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: pink; */
  /* width: 100%;
  height: 100%; */
  /* border: 3px solid white; */
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Main = styled.div`
  /* height: 800px; */
  width: 100%;
`;

export default App;
