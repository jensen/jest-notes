import React from "react";
import Status from "components/status";
import Bug from "components/bug";
import Upgrades, { Upgrade } from "components/upgrades";
import useBugTracker from "hooks/use-bugtracker";
import useAutoFix from "hooks/use-autofix";

const Application = () => {
  const { bugs, addBug, removeBug } = useBugTracker();
  const { bps, addBps } = useAutoFix(addBug);

  return (
    <main>
      <Status bugs={bugs} bps={bps} />
      <Bug onClick={() => addBug(1)} />
      <Upgrades bugs={bugs} increaseBps={addBps} decreaseBugs={removeBug}>
        <Upgrade label="console.log" cost={10} bps={1} />
        <Upgrade label="Debugger" cost={100} bps={5} />
        <Upgrade label="Chrome Development Tools" cost={100} bps={5} />
        <Upgrade label="Documentataion" cost={500} bps={50} />
        <Upgrade label="Mentor" cost={1000} bps={25} />
      </Upgrades>
    </main>
  );
};

export default Application;
