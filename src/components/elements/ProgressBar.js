import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export const ProgressBar = () => {
    const currentStep = useSelector(state => state.steps.currentStep);
    const steps = useSelector(state => state.steps.steps);

    const [progress, setProgress] = useState(0);
    const [lastStep, setLastStep] = useState(currentStep);

    useEffect(() => {
        if (currentStep === lastStep) return;
        const index = steps.indexOf(currentStep);
        let _progress = Math.ceil(100 * index / steps.length);
        if (_progress > 0) {
            _progress+=2;
        }
        if (_progress > 100) {
            _progress = 100;
        }
        setProgress(_progress);
        setLastStep(currentStep);
    }, [currentStep, steps, lastStep]);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-background"><div className="progress-bar-fill" style={{ width: progress + "%" }}></div>
                <div className="progress-bar-thumb"
                    style={{ left: progress + "%" }}
                ><span>{progress + "%"}</span></div>
            </div>
        </div>
    )
}