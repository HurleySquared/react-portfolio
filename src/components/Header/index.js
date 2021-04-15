import React from "react";
import Nav from "../../components/Nav";
import "./style.css";

function Header() {
  return (
    <div style={{background:"transparent"}} className="jumbotron jumbotron-fluid">
      <div className="container header">
        <h1 className="display-4">Eric Hurley</h1>
        <Nav />
      </div>
    </div>
  )
};

export default Header;