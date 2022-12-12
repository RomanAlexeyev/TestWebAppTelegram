import React, { useEffect } from "react";

export const BreakingPointQuestion = ({masterValue, changeMasterValue, setNextButtonDisabled}) => {
    useEffect(() => {
        setNextButtonDisabled(masterValue.breakingPoint === null);
    }, [masterValue.breakingPoint]);

    const checkboxHandler = (bool) => {
        changeMasterValue("breakingPoint", bool);
    };

    return (
        <>
            <div className="question-title">Матч прошел в одном состоянии или был переломный момент?</div>
            <div className="question-body">
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(false)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.breakingPoint === false ? "checked" : ""
                                }`}
                        >
                            {masterValue.breakingPoint === false && (
                                <div className="custom-radio-button-inner"></div>
                            )}
                        </div>
                    </div>
                    <div className="checkbox-text">В одном состоянии</div>
                </div>
                <div
                    className="checkbox-block"
                    onClick={() => checkboxHandler(true)}
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-radio-button ${masterValue.breakingPoint === true ? "checked" : ""
                                }`}
                        >
                            {masterValue.breakingPoint === true && (
                                <div className="custom-radio-button-inner"></div>
                            )}
                        </div>
                    </div>
                    <div className="checkbox-text">Был переломный момент</div>
                </div>
            </div>
        </>
    );
}