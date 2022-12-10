import React, { useEffect, useState } from "react";

import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";

const emotions = {
  joy: "радость",
  fear: "страх",
  despair: "отчаяние",
  shame: "стыд/вину",
  anger: "злость",
  loathing: "отвращение",
  indifference: "безразличие",
};

export const EmotionsOptionQuestion = ({
  masterValue,
  changeMasterValueObject,
  setNextButtonDisabled,
  masterValueKey,
  emotion,
  emotionsOptions,
}) => {

  const [isCustomChecked, setIsCustomChecked] = useState(false);

  const customEmotion = masterValue[masterValueKey][emotion].filter(emotionObject => emotionObject.code === "custom")[0];

  const checkboxHandler = (option) => {
    const array = [...masterValue[masterValueKey][emotion]];
    const index = array.findIndex(emotion => emotion.code === option.code);
    if (index < 0) {
      array.push(option);
    } else {
      array.splice(index, 1);
    }
    changeMasterValueObject(masterValueKey, emotion, array);
  };

  const customInputHandler = (e) => {
    const value = e.target.value;
    const array = [...masterValue[masterValueKey][emotion]];
    const index = array.findIndex(emotion => emotion.code === "custom");

    if (!!value.length) {
      if (index < 0) {
        array.push({ code: "custom", description: value });
      } else {
        array[index].description = value;
      }
    } else {
      if (index >= 0) {
        array.splice(index, 1);
      }
    }

    changeMasterValueObject(masterValueKey, emotion, array);
  }

  useEffect(() => {
    setNextButtonDisabled(
      !masterValue[masterValueKey][emotion].length
    );
    const array = [...masterValue[masterValueKey][emotion]];
    const index = array.findIndex(emotion => emotion.code === "custom");
    setIsCustomChecked(index >= 0 && !!array[index].description.length);
  }, [masterValue[masterValueKey][emotion]]);

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
          ].findIndex(emotion => emotion.code === option.code) >= 0;
          return (
            <div
              className="checkbox-block"
              key={option.code}
              onClick={() => checkboxHandler(option)}
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
        <div
          className="checkbox-block"
        >
          <div className="checkbox-container">
            <div
              className={`custom-checkbox ${isCustomChecked ? "checked" : ""}`}
            >
              {isCustomChecked && <UilCheck />}
            </div>
          </div>
          <input className="checkbox-custom-input" type="text" placeholder="Другое..." value={customEmotion?.description || ""} onChange={(e) => customInputHandler(e)} />
        </div>
      </div>
    </>
  );
};
