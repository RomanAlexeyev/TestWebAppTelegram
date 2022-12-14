import { createSlice } from "@reduxjs/toolkit";

export const initialSteps = [
    "tournamentName",
    "tournamentDate",
    "emotionsBeforeTournament",
    "senseOfDuty",
    "innerLevelOfReadiness",
    "readinessLevelRating",
    "happinessBeforeTournamentLevelRating",
    "anxietyBeforeTournamentLevelRating",
    "tasksForTournament",
    "mostInterestingMatch",
    "mostInterestingMatchOpponents",
    "mostInterestingMatchVictory",
    "mostInterestingMatchResult",
    "mostInterestingMatchBeforeEmotions",
    "innerLevelOfReadinessBeforeMatch",
    "readinessLevelBeforeMatchRating",
    "happinessBeforeMatchLevelRating",
    "anxietyBeforeMatchLevelRating",
    "tasksForThisMatch",
    "letsTalkAboutThisMatch",
    "breakingPoint",
    "emotionsDuringMatch",
    "satisfactionDuringMatchRating",
    "happinessDuringMatchRating",
    "anxietyDuringMatchRating",
    "senseOfDutyDuringMatch",
    "letsTalkAboutEmotionsAfterMatch",
    "emotionsAfterMatch",
    "readinessLevelAfterMatchRating",
    "happinessLevelAfterMatchRating",
    "anxietyLevelAfterMatchRating",
    "letsTalkAboutTournamentResults",
    "tournamentResultsPlace",
    "tournamentResultsEmotions",
    "readinessLevelAfterTournamentRating",
    "happinessLevelAfterTournamentRating",
    "anxietyLevelAfterTournamentRating",
    "tournamentWins",
    "tournamentFails",
    "tournamentTodos",
    "finisher",
];

const stepSlice = createSlice({
    name: "steps",
    initialState: {
        steps: initialSteps,
        currentStep: "tournamentName",
    },
    reducers: {
        goToPrevious(state) {
            const index = state.steps.indexOf(state.currentStep);
            state.currentStep = state.steps[index - 1];
        },
        goToNext(state) {
            const index = state.steps.indexOf(state.currentStep);
            state.currentStep = state.steps[index + 1];
        },
        setSteps(state, action) {
            state.steps = action.payload;
        }

        //     if (index === state.steps.length-1) {
        //       const data = {
        //         queryId: tg.initDataUnsafe?.query_id,
        //         currentStep: currentStep,
        //         info: masterValue
        //       }
        //       fetch("http://localhost:8000/web-data", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data)
        //       })
        //     } else {
        //       setCurrentStep(steps[index + 1]);
        //     }
        //   }
    }
});

export const { goToPrevious, goToNext, setSteps } = stepSlice.actions;
export default stepSlice.reducer;