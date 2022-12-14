import React, { useState, useEffect } from "react";

import tickIcon from "../../assets/images/tick-icon.svg"
import { HelperTag } from "../elements/HelperTag";

const breakingPointCausesList = [
    {
        code: "upComingVictory",
        description: "Чувство приближающейся победы",
    },
    {
        code: "opponentsDomination",
        description: "Полная доминация соперника",
    },
    {
        code: "opponentStartedToCatchUp",
        description: "Соперник начал догонять",
    },
    {
        code: "gotIntoTheFuture",
        description: "Улетел в будущее",
    },
    {
        code: "gotIntoThePast",
        description: "Улетел в прошлое",
    },
    {
        code: "gotScaredOfRepeatingAScenario",
        description: "Я побоялся повторить сценарий прошлого матча",
    },
    {
        code: "gotDistractedByPeopleAround",
        description: "Я начал отвлекаться на окружающих",
    },
    {
        code: "iLostFocus",
        description: "Я потерял фокус и концентрацию",
    },
    {
        code: "iGotRelaxed",
        description: "Я расслабился",
    },
    {
        code: "iFocusedOnMyself",
        description: "Я сместил фокус на себя и на свои действия",
    },
    {
        code: "iReturnedToHereAndNow",
        description: "Я вернулся в «здесь и сейчас»",
    },
    {
        code: "iVeGotNothingToLose",
        description: "Мне нечего терять",
    },
    {
        code: "iDecidedToFightToTheEnd",
        description: "Я сказал, что буду бороться до конца",
    },
]

export const BreakingPointCausesQuestion = ({
    masterValue,
    changeMasterValue,
    setNextButtonDisabled }) => {

    const [isCustomChecked, setIsCustomChecked] = useState(false);
    const customCause = masterValue.breakingPointCauses.filter(cause => cause.code === "custom")[0];

    const checkboxHandler = (option) => {
        const array = [...masterValue.breakingPointCauses];
        const index = array.findIndex(emotion => emotion.code === option.code);
        if (index < 0) {
            array.push(option);
        } else {
            array.splice(index, 1);
        }
        changeMasterValue("breakingPointCauses", array);
    };

    const customInputHandler = (e) => {
        const value = e.target.value;
        const array = [...masterValue.breakingPointCauses];
        const index = array.findIndex(cause => cause.code === "custom");

        if (!!value.length) {
            if (index < 0) {
                array.push({ code: "custom", description: value });
            } else {
                array[index].description = value;
            }
        } else {
            if (index >= 0) {
                array.splice(index, 1);
            }
        }

        changeMasterValue("breakingPointCauses", array);
    }

    useEffect(() => {
        setNextButtonDisabled(
            !masterValue.breakingPointCauses.length
        );
        const array = [...masterValue.breakingPointCauses];
        const index = array.findIndex(cause => cause.code === "custom");
        setIsCustomChecked(index >= 0 && !!array[index].description.length);
    }, [masterValue.breakingPointCauses]);

    return (
        <>
            <div className="question-title">
                С чем был связан переломный момент?
            </div>
            <div className="question-body">
                <HelperTag />
                {breakingPointCausesList.map((cause) => {
                    const isChecked = masterValue.breakingPointCauses.findIndex(brCause => brCause.code === cause.code) >= 0;
                    return (
                        <div
                            className="checkbox-block"
                            key={cause.code}
                            onClick={() => checkboxHandler(cause)}
                        >
                            <div className="checkbox-container">
                                <div
                                    className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                                >
                                    {isChecked && <img src={tickIcon}/>}
                                </div>
                            </div>
                            <div className="checkbox-text">{cause.description}</div>
                        </div>
                    );
                })}
                <div
                    className="checkbox-block"
                >
                    <div className="checkbox-container">
                        <div
                            className={`custom-checkbox ${isCustomChecked ? "checked" : ""}`}
                        >
                            {isCustomChecked && <img src={tickIcon}/>}
                        </div>
                    </div>
                    <input className="checkbox-custom-input" type="text" placeholder="Другое..." value={customCause?.description || ""} onChange={(e) => customInputHandler(e)} />
                </div>
            </div>
        </>
    );
}