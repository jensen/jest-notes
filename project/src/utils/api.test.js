const { idText, isExportDeclaration } = require("typescript");

import { getUpgrades } from "utils/api";

describe("getUpgrades", () => {
  it("should resolve the promise", () => {
    jest.useFakeTimers();

    const upgrades = getUpgrades();

    jest.runAllTimers();

    expect(upgrades).resolves.toEqual([
      { label: "console.log", cost: 10, bps: 1 },
      { label: "Debugger", cost: 100, bps: 5 },
      { label: "Chrome Development Tools", cost: 100, bps: 5 },
      { label: "Documentataion", cost: 500, bps: 50 },
      { label: "Mentor", cost: 1000, bps: 25 },
    ]);
  });
});
