import React from "react";

const Feedback = ({
  successPopup,
  successMessage,
  errorPopup,
  errorMessage,
  modalInformation,
  mousePosition
}) => {
  return (
    <div>
      {successPopup && mousePosition.x >= 92 ? (
        <div
          style={{
            top  : modalInformation.y,
            left : modalInformation.x - 175
          }}
          className="feedback"
        >
          {successMessage}
        </div>
      ) : null}
      {errorPopup && mousePosition.x >= 92 ? (
        <div
          style={{
            top  : modalInformation.y,
            left : modalInformation.x - 175
          }}
          className="feedback"
        >
          {errorMessage}
        </div>
      ) : null}
      {successPopup && mousePosition.x < 92 ? (
        <div
          style={{ top: modalInformation.y, left: modalInformation.x }}
          className="feedback"
        >
          {successMessage}
        </div>
      ) : null}
      {errorPopup && mousePosition.x < 92 ? (
        <div
          style={{ top: modalInformation.y, left: modalInformation.x }}
          className="feedback"
        >
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};

export default Feedback;
