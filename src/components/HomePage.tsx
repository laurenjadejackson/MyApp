import React, { Component } from "react";
import "../App.css";
import Title from "./Title";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title pageTitle="Tech4Now" />
        <SocialMedia />
      </div>
    );
  }
}

export default HomePage;
