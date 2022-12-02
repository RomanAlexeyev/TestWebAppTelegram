import React, { useEffect } from "react";

import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";

const emotions = {
  joy: "радость",
  fear: "страх",
  sorrow: "грусть",
  anger: "гнев",
  loathing: "отвращение",
};

export const EmotionsOptionQuestion = ({
  masterValue,
  changeMasterValueObject,
  setNextButtonDisabled,
  masterValueKey,
  emotion,
  emotionsOptions,
}) => {

  const checkboxHandler = (code) => {
    const array = [...masterValue[masterValueKey][emotion]];
    const index = array.indexOf(code);
    if (index < 0) {
      array.push(code);
    } else {
      array.splice(index, 1);
    }
    changeMasterValueObject(masterValueKey, emotion, array);
  };

  useEffect(() => {
    setNextButtonDisabled(
      !masterValue[masterValueKey][emotion].length
    );
  }, [masterValue[masterValueKey]]);

  return (
    <>
      <div className="question-title">
        Почему ты чувствовал {emotions[emotion]}?
      </div>
      <div className="question-body">
        <HelperTag />
        {emotionsOptions.map((option) => {
          const isChecked = masterValue[masterValueKey][
            emotion
          ].includes(option.code);
          return (
            <div
              className="checkbox-block"
              key={option.code}
              onClick={() => checkboxHandler(option.code)}
            >
              <div className="checkbox-container">
                <div
                  className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                >
                  {isChecked && <UilCheck />}
                </div>
              </div>
              <div className="checkbox-text">{option.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
