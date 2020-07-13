import {
  render,
  fireEvent,
  act,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import Application from "components/application";

jest.mock("utils/api");

describe("Application Component", () => {
  it("should render without crashing", async () => {});
  it("should allow the auto fixer to increase the bug counts", async () => {});
});
