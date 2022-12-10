import React, { useEffect } from "react";

export const TasksForTournamentQuestion = ({
  masterValue,
  changeMasterValue,
  setNextButtonDisabled,
}) => {
  useEffect(() => {
    setNextButtonDisabled(!masterValue.tasksForTournament.length);
  }, [masterValue.tasksForTournament]);
  return (
    <>
      <div className="question-title">Супер! Какие задачи на турнир ты перед собой поставил?</div>
      <div className="question-body">
        <textarea
          rows="10"
          className="question-input-text"
          value={masterValue.tasksForTournament}
          onChange={(e) =>
            changeMasterValue("tasksForTournament", e.target.value)
          }
        />
      </div>
    </>
  );
};
