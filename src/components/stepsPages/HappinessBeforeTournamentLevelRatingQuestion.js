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
      <div className="question-title">Оцени уровень радости перед турниром от 1 до 10, где 1 - очень грустно, а 10 - очень много радости</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={"happinessBeforeTournamentLevelRating"}/>
          <div className="descriptor-container">
            <span>Очень грустно</span>
            <span>Очень много радости</span>
          </div>
        </div>
      </div>
    </>
  );
};
