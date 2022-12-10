import React, { useEffect } from "react";

import { AutoNextButton } from "../elements/AutoNextButton";

export const InnerLevelOfReadinessQuestion = ({setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(false);
      }, []);
      return (
        <>
          <div className="question-title">Отлично, ты справился! Давай теперь отследим твой внутренний уровень готовности к турниру, уровень радости и уровень волнения</div>
          <div className="question-body">
            <AutoNextButton text={"Давай"}/>
          </div>
        </>
      );
}