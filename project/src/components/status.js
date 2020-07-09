import React from "react";
import { formatCurrentBugs, formatBugsPerSecond } from "utils/format";

const Status = ({ bugs, bps }) => {
  return (
    <section>
      <h2>{formatCurrentBugs(bugs)}</h2>
      <h3>{formatBugsPerSecond(bps)}</h3>
    </section>
  );
};

export default Status;
