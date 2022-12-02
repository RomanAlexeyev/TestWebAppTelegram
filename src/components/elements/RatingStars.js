import React, { useEffect, useState } from "react";

import { UisStar } from "@iconscout/react-unicons-solid";

export const RatingStars = ({ changeMasterValue, masterValue, masterValueKey }) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(masterValue[masterValueKey]);

  useEffect(() => {
    changeMasterValue(masterValueKey, selected);
  }, [selected]);

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <UisStar
          className={`icon rating-star ${
            i <= selected || i <= hovered ? "" : "disabled"
          }`}
          size={60}
          key={"ratingStar_" + i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setSelected(i)}
        />
      );
    }
    return stars;
  };
  return <div className="stars-container">{renderRatingStars()}</div>;
};
