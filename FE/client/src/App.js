import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Banner from "./Banner";
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
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Tenor Sans", sans-serif;
  margin: 0px;
  /* height: 100vh; */
`;

export default App;
