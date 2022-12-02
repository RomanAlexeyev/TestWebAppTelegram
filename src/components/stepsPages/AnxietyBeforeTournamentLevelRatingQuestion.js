import React, { useEffect } from "react";

import { RatingStars } from "../elements/RatingStars";

export const AnxietyBeforeTournamentLevelRatingQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(masterValue.anxietyBeforeTournamentLevelRating === 0);
  }, [masterValue.anxietyBeforeTournamentLevelRating]);

  return (
    <>
      <div className="question-title">Оцени свой уровень волнения перед турниром</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={"anxietyBeforeTournamentLevelRating"}/>
          <div className="descriptor-container">
            <span>Супер спокоен</span>
            <span>Супер тревожен</span>
          </div>
        </div>
      </div>
    </>
  );
};
