import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Bug from "components/bug";

describe("Bug Component", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<Bug onClick={() => {}} />);
    expect(getByText("Bug")).toBeInTheDocument();
  });

  it("should call our click handler", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Bug onClick={onClick} />);

    fireEvent.click(getByText("Bug"));

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
