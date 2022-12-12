import React, { useEffect } from "react";

export const OpponentsQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.mostInterestingMatchOpponents.length);
  }, [masterValue.mostInterestingMatchOpponents]);
  return (
    <>
      <div className="question-title">С кем играл?</div>
      <div className="question-body">
        <input
          type="text"
          className="question-input-text"
          value={masterValue.mostInterestingMatchOpponents}
          onChange={(e) => changeMasterValue("mostInterestingMatchOpponents", e.target.value)}
        />
      </div>
    </>
  );
};