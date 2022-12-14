import React, { useEffect } from "react";

export const BreakingPointDirectionQuestion = ({ masterValue, changeMasterValue, setNextButtonDisabled }) => {
    useEffect(() => {
        setNextButtonDisabled(masterValue.breakingPointDirection === null);
    }, [masterValue.breakingPointDirection]);

    const checkboxHandler = (value) => {
        changeMasterValue("breakingPointDirection", value);
    };

    const breakingPointDirections = [
        {
            code: "firstGoodThenBad",
            description: "Сначала было хорошо, потом плохо"
        },
        {
            code: "firstBadThenGood",
            description: "Сначала было плохо, потом хорошо"
        },
    ]

    return (
        <>
            <div className="question-title">В какую сторону произошел перелом?</div>
            <div className="question-body">
                {breakingPointDirections.map(direction => {
                    const isChecked = masterValue.breakingPointDirection === direction.code;
                    return (
                        <div
                            key={direction.code}
                            className="checkbox-block"
                            onClick={() => checkboxHandler(direction.code)}
                        >
                            <div className="checkbox-container">
                                <div
                                    className={`custom-radio-button ${isChecked ? "checked" : ""
                                        }`}
                                >
                                    {isChecked && (
                                        <div className="custom-radio-button-inner"></div>
                                    )}
                                </div>
                            </div>
                            <div className="checkbox-text">{direction.description}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}