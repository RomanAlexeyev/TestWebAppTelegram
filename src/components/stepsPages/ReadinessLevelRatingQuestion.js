import React, { useEffect } from "react";

import { RatingStars } from "../elements/RatingStars";

export const ReadinessLevelRatingQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(masterValue.readinessLevelRating === 0);
  }, [masterValue.readinessLevelRating]);

  return (
    <>
      <div className="question-title">Оцени свою готовность к турниру</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={"readinessLevelRating"}/>
          <div className="descriptor-container">
            <span>Вообще не готов</span>
            <span>Готов на 100%</span>
          </div>
        </div>
      </div>
    </>
  );
};
