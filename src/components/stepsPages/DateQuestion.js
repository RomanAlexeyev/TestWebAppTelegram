import React, { useEffect, useState } from "react";

import ru from "date-fns/locale/ru";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import dateIcon from "../../assets/images/calendar-icon.svg"

export const DateQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {

  const [dayPickerOpen, setDayPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(masterValue.tournamentDate ? new Date(masterValue.tournamentDate).toLocaleDateString("ru-RU") : new Date().toLocaleDateString("ru-RU"));

  useEffect(() => {
    setNextButtonDisabled(!masterValue.tournamentDate);
  }, [masterValue.tournamentDate]);

  const pickAday = (val) => {
    changeMasterValue("tournamentDate", val);
    setDayPickerOpen(false);
    setSelectedDate(new Date(val).toLocaleDateString("ru-RU"));
  }

  return (
    <>
      <div className="question-title">Когда он проходил?</div>
      <div className="question-body">

        {dayPickerOpen ? <DayPicker
          mode="single"
          selected={masterValue.tournamentDate}
          onSelect={(val) => pickAday(val)}
          locale={ru}
        /> : <div className="date-input" onClick={() => setDayPickerOpen(true)}>
          <span className="date-icon"><img src={dateIcon} /></span>
          <span className="date-text">{selectedDate}</span>
        </div>}
      </div>
    </>
  );
};
