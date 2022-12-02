import React, {useEffect} from "react";

export const WarmupSummaryQuestion = ({
  masterValue,
  changeMasterValue,
  warmupSummaries,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.warmupSummary);
  }, [masterValue.warmupSummary]);

  const checkboxHandler = (code) => {
    changeMasterValue("warmupSummary", code);
  };

  return (
    <>
      <div className="question-title">В целом получалось на разминке?</div>
      <div className="question-body">
        {warmupSummaries.map((warmup) => {
          const isChecked = masterValue.warmupSummary === warmup.code;
          return (
            <div
              className="checkbox-block"
              key={warmup.code}
              onClick={() => checkboxHandler(warmup.code)}
            >
              <div className="checkbox-container">
                <div
                  className={`custom-radio-button ${
                    isChecked ? "checked" : ""
                  }`}
                >
                  {isChecked && (
                    <div className="custom-radio-button-inner"></div>
                  )}
                </div>
              </div>
              <div className="checkbox-text">{warmup.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
