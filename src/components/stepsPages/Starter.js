import React, {useEffect} from "react";

import { AutoNextButton } from "../elements/AutoNextButton";

export const Starter = ({setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(false);
      }, []);
      return (
        <>
          <div className="question-title">Привет, ты сыграл турнир, давай поговорим о нем?</div>
          <div className="question-body">
            <AutoNextButton text={"Давай"}/>
          </div>
        </>
      );
}