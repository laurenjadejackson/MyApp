import React from "react";
import App from "./App";
import { mount } from "enzyme";

xdescribe("header component", () => {
  it("it should render", () => {
    //GIVEN that we launch our app
    //WHEN it renders
    //THEN we see a title
    //AND able to fit different device screens
    //AND css is working
    //AND fonts are working
    const component = mount(<Header />);
  });
});
