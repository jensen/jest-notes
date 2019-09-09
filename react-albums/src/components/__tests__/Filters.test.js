import React from "react";

import { render } from "@testing-library/react";

import Filters from "components/Filters";

describe("Filters", () => {
  it("renders with the default filter selection", () => {
    const { getByTestId } = render(<Filters filters={{ Explicit: true }} />);

    expect(getByTestId("filters-form")).toHaveFormValues({
      Explicit: true
    });
  });
});
