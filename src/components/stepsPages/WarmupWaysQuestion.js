import React, { useEffect } from "react";

export const WarmupWaysQuestion = ({
  masterValue,
  changeMasterValue,
  warmupWays,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.warmupWays);
  }, [masterValue.warmupWays]);

  const checkboxHandler = (code) => {
    changeMasterValue("warmupWays", code);
  };

  return (
    <>
      <div className="question-title">Как ты разминаешься?</div>
      <div className="question-body">
        {warmupWays.map((warmup) => {
          const isChecked = masterValue.warmupWays === warmup.code;
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
