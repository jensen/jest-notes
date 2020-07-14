import { useState, useEffect, useCallback } from "react";

const useBugTracker = () => {
  const [bps, setBps] = useState(0);
  const [bugs, setBugs] = useState(0);

  const addBug = useCallback((count) => setBugs(bugs + count), [bugs]);
  const removeBug = useCallback((count) => setBugs(bugs - count), [bugs]);

  useEffect(() => {
    const interval = setInterval(() => {
      addBug(bps);
    }, 1000);

    return () => clearInterval(interval);
  }, [addBug, bps]);

  return {
    bugs,
    addBug,
    removeBug,
    bps,
    addBps: (bps) => setBps((prev) => prev + bps),
  };
};

export default useBugTracker;
