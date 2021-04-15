import React from "react";
import Nav from "../../components/Nav";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Eric Hurley</h1>
        <Nav />
      </div>
    </div>
  )
};

export default Header;