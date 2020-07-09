export const formatCurrentBugs = (bugs) => {
  if (bugs < 0) {
    throw new Error("Must supply non-negative value");
  }

  if (bugs === 0) {
    return "You have not fixed any bugs.";
  }

  if (bugs === 1) {
    return "You have fixed 1 bug.";
  }

  return `You have fixed ${bugs} bugs.`;
};

export const formatBugsPerSecond = (bps) => {
  if (bps < 0) {
    throw new Error("Must supply non-negative value");
  }

  if (bps === 0) {
    return "No auto fixing.";
  }

  if (bps === 1) {
    return "Fixing 1 bug per second.";
  }

  return `Fixing ${bps} bugs per second.`;
};
