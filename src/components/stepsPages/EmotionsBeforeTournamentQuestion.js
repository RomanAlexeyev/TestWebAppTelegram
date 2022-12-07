import React, { useEffect } from "react";

import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";

import { emotions } from "../elements/emotionsDescriptions";

export const EmotionsBeforeTournamentQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {


  const checkboxHandler = (code) => {
    const array = [...masterValue.emotionsBeforeTournament];
    const index = array.indexOf(code);
    if (index < 0) {
      array.push(code);
    } else {
      array.splice(index, 1);
    }
    changeMasterValue("emotionsBeforeTournament", array);
  };

  useEffect(() => {
    setNextButtonDisabled(!masterValue.emotionsBeforeTournament.length);
  }, [masterValue.emotionsBeforeTournament]);

  return (
    <>
      <div className="question-title">
        Отлично, а с какими чувствами ты едешь на этот турнир?
      </div>
      <div className="question-body">
        <HelperTag />
        {emotions.map((emotion) => {
          const isChecked = masterValue.emotionsBeforeTournament.includes(
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
