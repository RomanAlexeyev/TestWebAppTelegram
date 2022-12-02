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
      <div className="question-title">Какие задачи на этот турнир ты перед собой ставишь?</div>
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
