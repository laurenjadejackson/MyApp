import React, { Component } from "react";
import "../App.css";

class SocialMedia extends Component {
  public render() {
    return (
      <div id="social-media" className="social-media">
        <h2>Social Media</h2>
        <a href="https://www.instagram.com/laurenjadejackson">
          <img
            src="instagram_transparent.png"
            alt="instagram"
            height="60"
            width="50"
          />
        </a>
        <a href="https://www.facebook.com/lozzerjackson">
          <img src="Facebook" alt="Facebook" height="60" width="50" />
        </a>
        <a href="https://twitter.com/laurenjjackson7">
          <img src="twitter_edit.png" alt="Twitter" height="70" width="60" />
        </a>
        <a href="#">
          <img src="white_arrow.png" alt="Top" height="70" width="60" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
