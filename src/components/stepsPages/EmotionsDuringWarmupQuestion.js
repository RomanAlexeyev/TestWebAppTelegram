import React, { useEffect } from "react";

import { emotions } from "../elements/emotionsDescriptions";
import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";

export const EmotionsDuringWarmupQuestion = ({
  masterValue,
  changeMasterValue,
  warmupWays,
  setNextButtonDisabled,
}) => {
  const selectedWarmup = warmupWays.filter(
    (warmup) => warmup.code === masterValue.warmupWays
  )[0];
  const checkboxHandler = (code) => {
    const array = [...masterValue.emotionsDuringWarmup];
    const index = array.indexOf(code);
    if (index < 0) {
      array.push(code);
    } else {
      array.splice(index, 1);
    }
    changeMasterValue("emotionsDuringWarmup", array);
  };

  useEffect(() => {
    setNextButtonDisabled(!masterValue.emotionsDuringWarmup.length);
  }, [masterValue.emotionsDuringWarmup]);

  return (
    <>
      <div className="question-title">
        Отлично, а что ты чувствовал, когда {selectedWarmup.questionCloser}?
      </div>
      <div className="question-body">
        <HelperTag />
        {emotions.map((emotion) => {
          const isChecked = masterValue.emotionsDuringWarmup.includes(
            emotion.code
          );
          return (
            <div
              className="checkbox-block"
              key={emotion.code}
              onClick={() => checkboxHandler(emotion.code)}
            >
              <div className="checkbox-container">
                <div
                  className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                >
                  {isChecked && <UilCheck />}
                </div>
              </div>
              <div className="checkbox-text">
                <div className="title">{emotion.title}</div>
                <div className="description">{emotion.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
