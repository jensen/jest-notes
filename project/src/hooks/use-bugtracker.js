import { useState, useCallback } from "react";

const useBugTracker = () => {
  const [bugs, setBugs] = useState(0);

  const addBug = useCallback((count) => setBugs((prev) => prev + count), []);
  const removeBug = useCallback((count) => setBugs((prev) => prev - count), []);

  return {
    bugs,
    addBug,
    removeBug,
  };
};

export default useBugTracker;
