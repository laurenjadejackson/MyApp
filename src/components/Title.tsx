import React, { Component } from "react";
import "../App.css";
interface ITitleProps {
  pageTitle: string;
}

class Title extends Component<ITitleProps> {
  public render() {
    return (
      <div id="title">
        <h1>{this.props.pageTitle}</h1>
      </div>
    );
  }
}

export default Title;
