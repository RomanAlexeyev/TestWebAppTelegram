import React, { useEffect } from "react";

import ru from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const DateQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.tournamentDate);
  }, [masterValue.tournamentDate]);
  return (
    <>
      <div className="question-title">Когда он проходил?</div>
      <div className="question-body">
        <DayPicker
          mode="single"
          selected={masterValue.tournamentDate}
          onSelect={(val) => changeMasterValue("tournamentDate", val)}
          locale={ru}
        />
      </div>
    </>
  );
};
