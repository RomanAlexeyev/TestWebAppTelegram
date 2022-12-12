import React, { useEffect } from "react";

import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";

import { emotions } from "../elements/emotionsDescriptions";

export const EmotionsBeforeQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
  masterValueKey,
  title
}) => {


  const checkboxHandler = (code) => {
    const array = [...masterValue[masterValueKey]];
    const index = array.indexOf(code);
    if (index < 0) {
      array.push(code);
    } else {
      array.splice(index, 1);
    }
    changeMasterValue(masterValueKey, array);
  };

  useEffect(() => {
    setNextButtonDisabled(!masterValue[masterValueKey].length);
  }, [masterValue[masterValueKey]]);

  return (
    <>
      <div className="question-title">
        {title}
      </div>
      <div className="question-body">
        <HelperTag />
        {emotions.map((emotion) => {
          const isChecked = masterValue[masterValueKey].includes(
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
