import React, {useState, useEffect} from "react";

import { UilCheck } from "@iconscout/react-unicons";
import { HelperTag } from "../elements/HelperTag";
import { senseOfDutyOptions } from "../elements/emotionsDescriptions";

export const SenseOfDutyOptionsQuestion = ({
    masterValue,
    changeMasterValue,
    setNextButtonDisabled,
}) => {

    const [isCustomChecked, setIsCustomChecked] = useState(false);

    const customSense = masterValue.senseOfDutyOptions.filter(senseObject => senseObject.code === "custom")[0];

    const checkboxHandler = (option) => {
        const array = [...masterValue.senseOfDutyOptions];
        const index = array.findIndex(emotion => emotion.code === option.code);
        if (index < 0) {
            array.push(option);
        } else {
            array.splice(index, 1);
        }
        changeMasterValue("senseOfDutyOptions", array);
    };

    const customInputHandler = (e) => {
        const value = e.target.value;
        const array = [...masterValue.senseOfDutyOptions];
        const index = array.findIndex(emotion => emotion.code === "custom");

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

        changeMasterValue("senseOfDutyOptions", array);
    }

    useEffect(() => {
        setNextButtonDisabled(
            !masterValue.senseOfDutyOptions.length
        );
        const array = [...masterValue.senseOfDutyOptions];
        const index = array.findIndex(emotion => emotion.code === "custom");
        setIsCustomChecked(index >= 0 && !!array[index].description.length);
    }, [masterValue.senseOfDutyOptions]);

    return (
        <>
            <div className="question-title">
                Почему ты это чувствовал?
            </div>
            <div className="question-body">
                <HelperTag />
                {senseOfDutyOptions.map((sense) => {
                    const isChecked = masterValue.senseOfDutyOptions.findIndex(
                        option => option.code === sense.code
                    ) >= 0;
                    return (
                        <div
                            className="checkbox-block"
                            key={sense.code}
                            onClick={() => checkboxHandler(sense)}
                        >
                            <div className="checkbox-container">
                                <div
                                    className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                                >
                                    {isChecked && <UilCheck />}
                                </div>
                            </div>
                            <div className="checkbox-text">
                                {sense.description}
                            </div>
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
                            {isCustomChecked && <UilCheck />}
                        </div>
                    </div>
                    <input className="checkbox-custom-input" type="text" placeholder="Другое..." value={customSense?.description || ""} onChange={(e) => customInputHandler(e)} />
                </div>
            </div>
        </>
    );
}