import React, { useEffect } from "react";

export const ResultQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.mostInterestingMatchResult.length);
  }, [masterValue.mostInterestingMatchResult]);
  return (
    <>
      <div className="question-title">Какой был итоговый счет?</div>
      <div className="question-body">
        <input
          type="text"
          className="question-input-text"
          value={masterValue.mostInterestingMatchResult}
          onChange={(e) => changeMasterValue("mostInterestingMatchResult", e.target.value)}
        />
      </div>
    </>
  );
};
