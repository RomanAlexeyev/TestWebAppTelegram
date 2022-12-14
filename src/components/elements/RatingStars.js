import React, { useEffect, useState } from "react";

import coloredStar from "../../assets/images/star-colored.svg";
import whiteStar from "../../assets/images/star-white.svg";

export const RatingStars = ({ changeMasterValue, masterValue, masterValueKey }) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(masterValue[masterValueKey]);

  useEffect(() => {
    changeMasterValue(masterValueKey, selected);
  }, [selected]);

  useEffect(() => {
    setSelected(masterValue[masterValueKey]);
  }, [masterValueKey]);

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={"ratingStar_" + i}
          className={`icon rating-star ${i <= selected || i <= hovered ? "" : "disabled"}`}
          onClick={() => setSelected(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
        >
          <img src={coloredStar} />
          <img className="star-mask" src={whiteStar} />
        </span>
      );
    }
    return stars;
  };
  return <div className="stars-container">{renderRatingStars()}</div>;
};
