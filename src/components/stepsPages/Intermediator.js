import React, {useEffect} from "react";

import { AutoNextButton } from "../elements/AutoNextButton";

export const Intermediator = ({title, setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(false);
      }, []);
      return (
        <>
          <div className="question-title">{title}</div>
          <div className="question-body">
            <AutoNextButton text={"Давай"}/>
          </div>
        </>
      );
}