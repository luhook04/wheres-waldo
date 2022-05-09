import React from "react";

const Selector = ({
  remainingCharacters,
  modalInformation,
  mousePosition
}) => {
  const selectOptions = remainingCharacters.map((survivor, index) => {
    return (
      <div className="selection" key={index}>
        <p>{survivor.name}</p>
      </div>
    );
  });

  if (mousePosition.x >= 92 && modalInformation.show) {
    return (
      <div
        style={{ top: modalInformation.y, left: modalInformation.x - 50 }}
        className="selection-container"
      >
        {selectOptions}
      </div>
    );
  }
  else if (modalInformation.show) {
    return (
      <div
        style={{ top: modalInformation.y, left: modalInformation.x }}
        className="selection-container"
      >
        {selectOptions}
      </div>
    );
  }
  else return null;
};

export default Selector;

// 1. Map over remaining characters and display a div for each one that you can click on
// 2. Have character select screen only show up on click and disappear on second click
