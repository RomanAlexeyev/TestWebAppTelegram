import React, { useEffect } from "react";

import { RatingStars } from "../elements/RatingStars";

export const HappinessBeforeTournamentLevelRatingQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(masterValue.happinessBeforeTournamentLevelRating === 0);
  }, [masterValue.happinessBeforeTournamentLevelRating]);

  return (
    <>
      <div className="question-title">Оцени свой уровень радости перед турниром</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={"happinessBeforeTournamentLevelRating"}/>
          <div className="descriptor-container">
            <span>Очень грустно</span>
            <span>Очень радостно</span>
          </div>
        </div>
      </div>
    </>
  );
};
