import React from "react";

export const Finisher = ({masterValue, tg}) => {
    return (
        <>
            <div className="question-title"></div>
            <button className="button-next" onClick={() => tg.sendData(masterValue)}>
                <span>Получить эссе</span>
            </button>
        </>
    );
}