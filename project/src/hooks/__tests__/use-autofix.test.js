import { renderHook, act } from "@testing-library/react-hooks";
import useAutoFix from "hooks/use-autofix";

describe("useAutoFix", () => {
  it("should allow us to increase the bps count", () => {
    const addBug = jest.fn();
    const { result } = renderHook(() => useAutoFix(addBug));

    act(() => {
      result.current.addBps(1);
    });

    expect(result.current.bps).toBe(1);
  });

  it("should increase the bugs by bps after the timeout runs", () => {
    jest.useFakeTimers();

    const addBug = jest.fn();
    const { result } = renderHook(() => useAutoFix(addBug));

    act(() => {
      result.current.addBps(2);
    });

    expect(result.current.bps).toBe(2);

    expect(addBug).toHaveBeenCalledTimes(0);

    jest.runAllTimers();

    expect(addBug).toBeCalled();
    expect(addBug).toHaveBeenCalledTimes(1);
    expect(addBug).toHaveBeenCalledWith(2);
  });
});
