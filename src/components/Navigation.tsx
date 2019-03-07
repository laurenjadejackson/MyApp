import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navigation extends Component {
  public render() {
    return (
      <nav id="navigation" className="navigation">
        <ul>
          <li id="timeline">
            <Link to="/timeline">Time Line</Link>
          </li>
          <li id="home">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
