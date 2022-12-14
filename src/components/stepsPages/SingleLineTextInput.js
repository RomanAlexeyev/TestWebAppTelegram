import React, { useEffect } from "react";

export const SingleLineTextInput = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
  masterValueKey,
  title
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue[masterValueKey].length);
  }, [masterValue[masterValueKey]]);
  return (
    <>
      <div className="question-title">{title}</div>
      <div className="question-body">
        <input
          type="text"
          placeholder="Введите ответ"
          className="question-input-text"
          value={masterValue[masterValueKey]}
          onChange={(e) => changeMasterValue(masterValueKey, e.target.value)}
        />
      </div>
    </>
  );
};
