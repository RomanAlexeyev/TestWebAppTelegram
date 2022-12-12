import React, { useEffect } from "react";

export const SenseOfDutyDuringMatchQuestion = ({masterValue, changeMasterValue, setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(masterValue.senseOfDutyDuringMatch === null);
    }, [masterValue.senseOfDutyDuringMatch]);

    const checkboxHandler = (bool) => {
        changeMasterValue("senseOfDutyDuringMatch", bool);
    };

    return (
        <>
            <div className="question-title">И вновь о чувстве долга. Было ли у тебя это во время матча?</div>
            <div className="question-body">
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(true)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.senseOfDutyDuringMatch === true ? "checked" : ""
                                }`}
                        >
                            {masterValue.senseOfDutyDuringMatch === true && (
                                <div className="custom-radio-button-inner"></div>
                            )}
                        </div>
                    </div>
                    <div className="checkbox-text">Да</div>
                </div>
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(false)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.senseOfDutyDuringMatch === false ? "checked" : ""
                                }`}
                        >
                            {masterValue.senseOfDutyDuringMatch === false && (
                                <div className="custom-radio-button-inner"></div>
                            )}
                        </div>
                    </div>
                    <div className="checkbox-text">Нет</div>
                </div>
            </div>
        </>
    );
}