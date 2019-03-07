import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch, Router } from "react-router";
import TimeLine from "./components/TimeLine";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/timeline/" component={TimeLine} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
