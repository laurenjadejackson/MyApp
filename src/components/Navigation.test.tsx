import React from "react";
import { mount } from "enzyme";
import Navigation from "./Navigation";

describe("Navigation Bar", () => {
  it("renders a Timeline and Home button", () => {
    const navigationBar = mount(<Navigation />);

    expect(navigationBar.find("ul").length).toBe(1);
    expect(navigationBar.find("#timeline").text()).toBe("Time Line");
    expect(navigationBar.find("#home").text()).toBe("Home");
  });
});
