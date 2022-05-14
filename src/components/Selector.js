import React from "react";

const Selector = ({
  remainingCharacters,
  modalInformation,
  mousePosition,
  checkPosition
}) => {
  const selectOptions = remainingCharacters.map((survivor, index) => {
    return (
      <div className="selection" key={index} onClick={checkPosition}>
        <h3>{survivor.name}</h3>
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
