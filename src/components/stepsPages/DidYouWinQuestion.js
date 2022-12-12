import React, { useEffect } from "react";

export const DidYouWinQuestion = ({masterValue, changeMasterValue, setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(masterValue.mostInterestingMatchVictory === null);
    }, [masterValue.mostInterestingMatchVictory]);

    const checkboxHandler = (bool) => {
        changeMasterValue("mostInterestingMatchVictory", bool);
    };

    return (
        <>
            <div className="question-title">Выиграл?</div>
            <div className="question-body">
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(true)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.mostInterestingMatchVictory === true ? "checked" : ""
                                }`}
                        >
                            {masterValue.mostInterestingMatchVictory === true && (
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
                            className={`custom-radio-button ${masterValue.mostInterestingMatchVictory === false ? "checked" : ""
                                }`}
                        >
                            {masterValue.mostInterestingMatchVictory === false && (
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