import { render, fireEvent, act } from "@testing-library/react";
import React from "react";
import Application from "components/application";

describe("Application Component", () => {
  it("should render without crashing", () => {
    render(<Application />);
  });

  it("should allow the auto fixer to increase the bug counts", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Application />);

    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));

    expect(getByText("You have fixed 4 bugs.")).toBeInTheDocument();

    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));
    fireEvent.click(getByText("Bug"));

    expect(getByText("console.log (10)")).toBeDisabled();

    fireEvent.click(getByText("Bug"));

    expect(getByText("console.log (10)")).not.toBeDisabled();

    fireEvent.click(getByText("console.log (10)"));

    expect(getByText("Fixing 1 bug per second.")).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(getByText("You have fixed 1 bug.")).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(getByText("You have fixed 2 bugs.")).toBeInTheDocument();

    fireEvent.click(getByText("Bug"));

    expect(getByText("You have fixed 3 bugs.")).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(getByText("You have fixed 4 bugs.")).toBeInTheDocument();
  });
});
