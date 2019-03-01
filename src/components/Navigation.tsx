import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TimeLine from "./TimeLine";

class Navigation extends Component {
  public render() {
    return (
      <Router>
        <nav id="navigation" className="navigation">
          <ul>
            <li id="timeline">
              <Link to="/timeline/">Time Line</Link>
            </li>
            <li id="home">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/timeline/" component={TimeLine} />
      </Router>
    );
  }
}

export default Navigation;
