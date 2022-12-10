import React, { useEffect } from "react";

export const SenseOfDutyQuestion = ({masterValue, changeMasterValue, setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(masterValue.senseOfDuty === null);
    }, [masterValue.senseOfDuty]);

    const checkboxHandler = (bool) => {
        changeMasterValue("senseOfDuty", bool);
    };

    return (
        <>
            <div className="question-title">Давай поговорим о чувстве долга. Игроки часто с таким сталкиваются. Было ли у тебя это перед турниром?</div>
            <div className="question-body">
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(true)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.senseOfDuty === true ? "checked" : ""
                                }`}
                        >
                            {masterValue.senseOfDuty === true && (
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
                            className={`custom-radio-button ${masterValue.senseOfDuty === false ? "checked" : ""
                                }`}
                        >
                            {masterValue.senseOfDuty === false && (
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