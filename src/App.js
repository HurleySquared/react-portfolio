import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <AboutMe />
        {/* <Route exact path="/" component={Header}/>
        <Route exact path="/projects" component={Projects}/> */}
        <Contact />
      <Footer />
    </Router>
  );
}

export default App;
