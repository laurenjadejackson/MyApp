import React, { Component } from "react";
import "../App.css";
import Title from "./Title";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title />
        <Navigation />
        <SocialMedia />
      </div>
    );
  }
}

export default HomePage;
