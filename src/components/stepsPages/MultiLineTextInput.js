import React, { useEffect } from "react";

export const MultiLineTextInput = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
  title,
  masterValueKey
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue[masterValueKey].length);
  }, [masterValue[masterValueKey]]);
  return (
    <>
      <div className="question-title">{title}</div>
      <div className="question-body">
        <textarea
          rows="10"
          className="question-input-text"
          value={masterValue[masterValueKey]}
          onChange={(e) =>
            changeMasterValue(masterValueKey, e.target.value)
          }
          placeholder="Введите текст"
        />
      </div>
    </>
  );
};
