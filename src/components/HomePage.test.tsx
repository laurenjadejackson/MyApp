import React from "react";
import { mount } from "enzyme";
import HomePage from "./HomePage";

describe("Home Page", () => {
  it("renders the title", () => {
    const homepage = mount(<HomePage />);

    expect(homepage.find("h1").text()).toBe("Tech4Now");
    expect(homepage.find("#title").length).toBe(1);
  });

  

  it("renders the social media links", () => {
    const homepage = mount(<HomePage />);

    expect(homepage.find("#social-media").length).toBe(1);
  });
});
