import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("App", () => {
  it("renders the navigation bar", () => {
    const app = mount(<App />);

    expect(app.find("#navigation").length).toBe(1);
  });
});

describe("Navigation Bar", () => {
  it("renders a Timeline and Home button", () => {
    const navigationBar = mount(<App />);

    expect(navigationBar.find("ul").length).toBe(1);
    expect(navigationBar.find("#timeline").text()).toBe("Time Line");
    expect(navigationBar.find("#home").text()).toBe("Home");
  });
});
