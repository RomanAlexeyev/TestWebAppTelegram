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
      <div className="question-title">Оцени уровень волнения перед турниром от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={"anxietyBeforeTournamentLevelRating"}/>
          <div className="descriptor-container">
            <span>Тотальное спокойствие</span>
            <span>Максимальная тревога</span>
          </div>
        </div>
      </div>
    </>
  );
};
