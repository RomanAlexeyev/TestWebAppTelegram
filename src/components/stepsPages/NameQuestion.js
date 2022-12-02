import React, { useEffect } from "react";

export const NameQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.tournamentName.length);
  }, [masterValue.tournamentName]);
  return (
    <>
      <div className="question-title">Как назывался турнир?</div>
      <div className="question-body">
        <input
          type="text"
          className="question-input-text"
          value={masterValue.tournamentName}
          onChange={(e) => changeMasterValue("tournamentName", e.target.value)}
        />
      </div>
    </>
  );
};
