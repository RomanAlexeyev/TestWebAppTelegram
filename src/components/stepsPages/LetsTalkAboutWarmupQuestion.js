import React, { useEffect } from "react";

export const LetsTalkAboutWarmupQuestion = ({setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(false);
      }, []);
      return (
        <>
          <div className="question-title">Отлично, ты приехал на турнир. Теперь давай поговорим о разминке</div>
        </>
      );
}