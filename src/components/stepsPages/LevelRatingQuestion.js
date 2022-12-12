import React, { useEffect } from "react";

import { RatingStars } from "../elements/RatingStars";

export const LevelRatingQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
  masterValueKey,
  title,
  descriptorLimitBottom,
  descriptorLimitTop
}) => {
  useEffect(() => {
    setNextButtonDisabled(masterValue[masterValueKey] === 0);
  }, [masterValue[masterValueKey]]);

  return (
    <>
      <div className="question-title">{title}</div>
      <div className="question-body">
        <div className="rating-container">
          <RatingStars changeMasterValue={changeMasterValue} masterValue={masterValue} masterValueKey={masterValueKey}/>
          <div className="descriptor-container">
            <span>{descriptorLimitBottom}</span>
            <span>{descriptorLimitTop}</span>
          </div>
        </div>
      </div>
    </>
  );
};
