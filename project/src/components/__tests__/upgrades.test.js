import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Upgrades, { Upgrade } from "components/upgrades";

describe("Upgrades Component", () => {
  it("should render its children", () => {
    const { getByText } = render(
      <Upgrades bugs={0}>
        <Upgrade label="Improve" cost={1} bps={1} />
      </Upgrades>
    );

    expect(getByText("Improve (1)")).toBeInTheDocument();
  });

  it("should increase the bps and decrease bugs", () => {
    const increaseBps = jest.fn();
    const decreaseBugs = jest.fn();

    const { getByText } = render(
      <Upgrades bugs={2} increaseBps={increaseBps} decreaseBugs={decreaseBugs}>
        <Upgrade label="Improve" cost={2} bps={1} />
      </Upgrades>
    );

    fireEvent.click(getByText("Improve (2)"));

    expect(increaseBps).toHaveBeenCalledWith(1);
    expect(decreaseBugs).toHaveBeenCalledWith(2);
  });
});
