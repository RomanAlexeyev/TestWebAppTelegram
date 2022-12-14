import React from "react";

export const Finisher = ({masterValue, tg}) => {
    return (
        <>
            <div className="question-title"></div>
            <button className="button-auto-next" onClick={() => tg.close()}>
                <span>Получить эссе</span>
            </button>
        </>
    );
}