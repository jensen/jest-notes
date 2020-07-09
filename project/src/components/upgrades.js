import React from "react";

export const Upgrade = ({ label, cost, disabled, onUpgrade }) => {
  return (
    <li>
      <button disabled={disabled} onClick={onUpgrade}>
        {label} ({cost})
      </button>
    </li>
  );
};

const Upgrades = ({ bugs, increaseBps, decreaseBugs, children }) => (
  <section>
    <h3>Upgrades</h3>
    <ul>
      {React.Children.map(children, (child) => ({
        ...child,
        props: {
          ...child.props,
          disabled: bugs < child.props.cost,
          onUpgrade: () => {
            decreaseBugs(child.props.cost);
            increaseBps(child.props.bps);
          },
        },
      }))}
    </ul>
  </section>
);

export default Upgrades;
