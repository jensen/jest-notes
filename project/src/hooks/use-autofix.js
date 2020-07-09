import { useState, useEffect, useRef } from "react";

const useAutoFix = (increment) => {
  const [bps, setBps] = useState(0);

  const timerCallbackRef = useRef(null);
  const timerHandlerRef = useRef(null);

  useEffect(() => {
    timerCallbackRef.current = () => increment(bps);
  }, [increment, bps]);

  useEffect(() => {
    if (!timerHandlerRef.current) {
      timerHandlerRef.current = setTimeout(() => {
        timerHandlerRef.current = null;
        timerCallbackRef.current();
      }, 1000);
    }
  });

  return {
    bps,
    addBps: (bps) => setBps((prev) => prev + bps),
  };
};

export default useAutoFix;
