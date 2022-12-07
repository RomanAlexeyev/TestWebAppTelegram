import React from "react";

import { goToNext } from "../../store/slices/stepSlice";
import { useDispatch } from "react-redux";

export const AutoNextButton = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <button className="button-next" onClick={() => dispatch(goToNext())}>
      <span>{text}</span>
    </button>
  );
};
