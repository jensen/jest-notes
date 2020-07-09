import { renderHook, act } from "@testing-library/react-hooks";
import useBugTracker from "hooks/use-bugtracker";

describe("useBugTracker", () => {
  it("should allow us to increase the bug count", () => {
    const { result } = renderHook(() => useBugTracker());

    act(() => {
      result.current.addBug(1);
    });

    expect(result.current.bugs).toBe(1);
  });

  it("should allow us to decrease the bug count", () => {
    const { result } = renderHook(() => useBugTracker());

    act(() => {
      result.current.addBug(1);
      result.current.removeBug(1);
    });

    expect(result.current.bugs).toBe(0);
  });
});
