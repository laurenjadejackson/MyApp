import React from "react";
import { mount } from "enzyme";
import TimeLine from "./TimeLine";
// TODO: create the timeline elements

describe("TimeLine", () => {
  it("renders the title", () => {
    const timeline = mount(<TimeLine />);

    expect(timeline.find("h1").text()).toBe("TimeLine");
    expect(timeline.find("#title").length).toBe(1);
  });
});
