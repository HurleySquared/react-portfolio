import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch >
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
